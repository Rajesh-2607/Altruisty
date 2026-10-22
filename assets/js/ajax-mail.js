$(function () {

    // Set CONTACT_ENDPOINT to a form backend (Formspree, Web3Forms, or your own
    // API) to deliver submissions in the background. While it is empty the form
    // falls back to opening the visitor's mail client, so an enquiry is never
    // silently dropped.
    //
    // The previous version POSTed to "contact.html" -- a static page -- so the
    // request "succeeded" and echoed the page's own HTML back as the status
    // message. The form fields also had no name attributes, so nothing was
    // actually serialized.
    var CONTACT_ENDPOINT = '';
    var CONTACT_EMAIL = 'altruistybusiness@gmail.com';

    var form = $('#contact-form');
    if (!form.length) {
        return;
    }

    var formMessages = $('.form-message');
    var submitBtn = form.find('button[type="submit"]');
    var submitHtml = submitBtn.html();

    function setStatus(kind, text) {
        formMessages.removeClass('success error').addClass(kind).text(text);
    }

    form.on('submit', function (e) {
        e.preventDefault();

        var data = {
            name: form.find('[name="name"]').val().trim(),
            email: form.find('[name="email"]').val().trim(),
            phone: form.find('[name="phone"]').val().trim(),
            service: form.find('[name="service"]').val(),
            message: form.find('[name="message"]').val().trim()
        };

        if (!data.name || !data.email || !data.message) {
            setStatus('error', 'Please fill in your name, email and message.');
            return;
        }

        if (!CONTACT_ENDPOINT) {
            // No backend configured: hand the enquiry to the mail client.
            var subject = 'Website enquiry from ' + data.name +
                (data.service && data.service.indexOf('Select') !== 0 ? ' - ' + data.service : '');
            var body = 'Name: ' + data.name + '\n' +
                'Email: ' + data.email + '\n' +
                'Phone: ' + data.phone + '\n' +
                'Service: ' + data.service + '\n\n' +
                data.message;
            window.location.href = 'mailto:' + CONTACT_EMAIL +
                '?subject=' + encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(body);
            setStatus('success', 'Opening your email app with the enquiry ready to send.');
            return;
        }

        submitBtn.prop('disabled', true).text('Sending...');

        $.ajax({
            type: 'POST',
            url: CONTACT_ENDPOINT,
            data: JSON.stringify(data),
            contentType: 'application/json',
            dataType: 'json'
        })
            .done(function () {
                setStatus('success', 'Thanks! Your enquiry has been sent and we will be in touch shortly.');
                form.find('input, textarea').val('');
            })
            .fail(function () {
                setStatus('error', 'Could not send that - please email ' + CONTACT_EMAIL + ' directly.');
            })
            .always(function () {
                submitBtn.prop('disabled', false).html(submitHtml);
            });
    });

});

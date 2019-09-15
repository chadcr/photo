
$(document).ready(function () {
    $('.contact-form-btn').click(function (event) {
        console.log('clicked')

        var name = $('.contact-form-name').val()
        var email = $('.contact-form-email').val()
        var message = $('.contact-form-message').val()

        if(name.length <= 2 ) {
            event.preventDefault()
            $('.contact-form-name')[0].value='';
            $('.contact-form-name').attr('placeholder','Invalid name');
        }

        if(email.length < 5 || !(email.includes('@')) || !(email.includes('.'))) {
            event.preventDefault()
            $('.contact-form-email')[0].value='';
            $('.contact-form-email').attr('placeholder','Invalid email');
        }

        if(message.length <= 10) {
            event.preventDefault()
            $('.contact-form-message')[0].value='';
            $('.contact-form-message').attr('placeholder','Invalid message');
        }

    })
}) 
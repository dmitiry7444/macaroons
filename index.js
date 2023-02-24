"use strict";
document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}
document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
});

$('#submit').click(function () {
    let product = $('#product');
    let name = $('#name');
    let phone = $('#phone');
    let hasError = false;
let loader  = $('.loader');

    $('.error-input').hide();
    $('.lab_input').css('border-color', 'rgb(130, 19, 40)')

    if (!product.val()) {
        product.next().show();
        product.css('border-color', 'red')
        hasError = true;
    }
    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red')
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        phone.css('border-color', 'red')
        hasError = true;
    }

    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: { product: product.val(), name: name.val(), phone: phone.val() }
        })
            .done(function( msg ) {
                loader.hide();
                if (msg.success) {
                    $('.order__form').hide()
                    $('.order__success').show()
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                }
            });
    }
})


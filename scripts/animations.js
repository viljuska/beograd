$(document).ready(function () {


    var menu = document.querySelector('.menu');

    function toggleMenu() {
        menu.classList.toggle('open');
    }

    menu.addEventListener('click', toggleMenu);


    //Javascript excerpt
    if ($(window).width() < 500) {
        $('.service a p').each(function () {
            $(this).text($(this).text().substr(0, 80) + '...');
        });
    }


});


$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    var element = $('#fullHeight').height() - ($('#fullHeight').height() - 150);

    if (scroll > element) {
        $('#index .book-link').removeClass('hidden');
    } else if (scroll == 0) {
        $('#index .book-link').addClass('hidden');
    }
});


$('#scrollToBottom').click(function (event) {
    jQuery('#index .book-link').removeClass('hidden').delay(800);
});
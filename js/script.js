$(function () {

    $('.nav__list > li').mouseenter(
        function() {
            $(this).siblings('li').children('.dropdown__menu').slideUp();
            $(this).children('.dropdown__menu').slideDown();
        }
    );

    $('.nav__list > li').click(
        function() {
            $(this).children('.dropdown__menu').slideToggle();
        }
    );
});
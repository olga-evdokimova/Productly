$(function () {
    //слайдер и его настройки
    $('.slider').slick({
        arrows: false,//убираем стрелки
        slidesToShow: 3,//колличество слайдлов в окне
        slidesToScroll: 3,//пролистывается по 3 слайда
        autoplay: true,//автоматическое перелистывание
        autoplaySpeed: 2000,//скорость перелистывания
        dots: true,//добавляем дотс
    });
    //находим бургер. при клике выходит меню при вторм клике прячется обратно
    $('.header__burger').on('click', function () {
        //при клике на бургер появляется новый класс- menu__list-active
        $('.menu__list').toggleClass('menu__list-active')
    });
});
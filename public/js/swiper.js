var swiper = new Swiper(".mySwiper", {

    //Расстояние между слайдами
    spaceBetween: 10,

    //Указываю, какой кнопкой в какую сторону листать
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    //С последнего элемента можно сразу перейти на первый
    loop: true,

    //Параметры пагинации (точек внизу)
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,

        //Функция для нумерации пагинации
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },

    //Способы прокрутки слайдера
    mousewheel: true,
    keyboard: true,

    //Эффект слайдера
    effect: 'cube',

    //Настройки выбранного эффекта
    effectCube: {

        slideShadow: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

    /*
    effect: "coverflow",
    coverflow: {

        rotate: 100,

    },
*/

    //Автовысота
    autoHeight: false,

    //Слайдов за просмотр
    slidesPerView: 1,

    //Центрирование слайдов
    centeredSlides: true,

    //Начальный слайд при загрузке страницы
    initialSlide: 0,

});
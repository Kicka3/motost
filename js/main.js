$(function () {


    $('.banner-sectionSlider').slick({
        dots: true,
        prevArrow: '<button class="banner-sectionSlider-btn banner-sectionSlider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-sectionSlider-btn banner-sectionSlider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false
                }
            }
        ]
    });


    //Переключение табов в поиске.

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.productSlider').slick('setPosition');
    });


    //Добавление товара в избранное.

    const favorItem = document.querySelectorAll('.productItem__favorite');
    favorItem.forEach(productItem__favorite => {
        productItem__favorite.addEventListener("click", () => {
            productItem__favorite.classList.toggle('productItem__favorite--active')
        });
    });


    const pageActive = document.querySelectorAll('.page__active');
    for (let i = 0; i < pageActive.length; i++) {
        pageActive[i].addEventListener('click', function () {
            pageActive.forEach(button => button.classList.remove('now--active'));
            this.classList.add('now--active');
        });

    }


    // let modWin = document.querySelector('.input__btn');
    // modWin.forEach(input__btn => {
    //     input__btn.addEventListener('click', () => {
    //         action__page.classList.toggle('action__page--active');
    //     });
    // });



   
    





    // slider JQ

    $('.productSlider').slick({
        slidesToShow: 4,
        slidesToCroll: 1,
        dots: false,
        prevArrow: '<button class="productSlider__Slider-btn productSlider__Slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="productSlider__Slider-btn productSlider__Slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });
    // Добавить слайдер на JS


    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    })

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });


    // Переписать на JS
    // Переключает иконки на каталоге возле по пулярности
    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.productItem__wrapper').removeClass('productItem__wrapper--list');
    });

    // Наоборот 
    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.productItem__wrapper').addClass('productItem__wrapper--list');
    });


    //Звездный рейтинг
    $(".rate-yo").rateYo({
        ratedFill: "#1C62CD",
        normalFiil: "#C4C4C4",
        spacing: "7px",
    });


    //   меню-бургер для моб.Jquery:

    $(".menu__btn").on("click", function () {
        $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
    });


    $('.footer__topdrop').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('footer__topdrop--active');
    });


    $('.aside__btn').on('click', function () {
        $(this).next().slideToggle();
    });


    //open modul-win 




});

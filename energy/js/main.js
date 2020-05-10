$(document).ready(function() {

    //мобильное меню

    $('.header-ham').on('click', function(){
        $('.header-mob').show();
        $(this).hide();
        $('.header-ham-close').show();
        $('body').addClass('active-menu');
    });

    $('.header-ham-close').on('click', function() {
        $('.header-mob').hide();
        $(this).hide();
        $('.header-ham').show();
        $('body').removeClass('active-menu');
    });

    //изменение шапки на главной

    $('.header-ham__home').on('click', function() {
        $('.header.header__home .header-logo__img').attr('src', 'img/logo.svg');
        $('.header .header-logo__text').css('color', 'black');
        $('.header.header__home').css('background-color', 'white');
    });

    $('.header-ham-close__home').on('click', function() {
        $('.header.header__home .header-logo__img').attr('src', 'img/logo-white.svg');
        $('.header .header-logo__text').css('color', 'white');
        $('.header.header__home').css('background-color', 'transparent');
    });

    
    
   

});
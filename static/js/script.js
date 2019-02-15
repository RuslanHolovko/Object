/* Modal box */

$('.scroll-page').click(function() {
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top}, 1000)
})

/* Open modal */

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

var modalWrapper = $('#modal-overlay');

function articleModalOpen(type) {

    if( type == "recall" ) {
        modalWrapper.find('.modal-box__title').text('ICH WÜNSCHE EINEN RÜCKRUF');
    } else if ( type == "email" ) {
        modalWrapper.find('.modal-box__title').text('SCHREIBEN SIE MIR EINE E-MAIL');
    } else if ( type == 'subscribe' ) {
        modalWrapper.find('.modal-box__title').text('NEWSLETTER ANMELDUNG')
        modalWrapper.addClass('subscribe');
    }

    /* Modal captcha */

    var captcha = randomInteger(1000, 9999);
    modalWrapper.find('#modal-captcha').text(captcha);

    modalWrapper.addClass('is-opened');
}

$('a[data-modal="true"]').click(function(event) {
    event.preventDefault();
    articleModalOpen( $(event.target).attr('data-modal-type') );
});

$('.cls-modal').click(function() {
    modalWrapper.removeClass('is-opened');
    modalWrapper.removeClass('subscribe');
});






/* Search */

$('.page-search').on('click', function () {
    $('.navbar').hide();
    $('#search').show().css('display', 'flex');
    $("body").addClass("fixed");
});

/*Close Search*/

$('.search-close').on('click', function () {
    $('.navbar').show().css('display', 'flex');
    $('#search').hide();
    $("body").removeClass("fixed");
});

/* Mobile search */

$('.mob-search').on('click', function () {
    $('.navbar').hide();
    $('#search').show().css('display', 'flex');
    $("body").addClass("fixed");
});

/* Mob menu */

$('.burger').on('click', function () {
    $('.mob-menu--wrapper').addClass('mob-menu--visible');
});

/* Close mob menu */

$('.mob-menu__close-btn').on('click', function () {
    $('.mob-menu--wrapper').removeClass('mob-menu--visible');
});



/* Condensed navbar */

var headerBgImg = $('.page-header').css('background-image');
var scrollBreak = $('.page-header').outerHeight();
var navbarHeight = $('.navbar').height();

var headerTitlePos = ($('.header__text').offset());

$(window).resize(function() {
    navbarHeight = $('.navbar').height();
    $('.subnav-fixed').css('top', navbarHeight + 'px' );
})

    $(window).scroll(function(){
		if($(window).scrollTop() >= headerTitlePos.top - navbarHeight) {
			console.log("11")
			$('.header__text').css('visibility','hidden');
		} else {
			$('.header__text').css('visibility','visible');
		}
        if ( $(window).scrollTop() >= (scrollBreak - navbarHeight) ){  
            // $('.navbar').addClass('navbar-bg');
            $('.navbar').css('background-image', headerBgImg)
            $('.subnav').addClass('subnav-fixed');
            $('.subnav-fixed').css('top', navbarHeight + 'px' );

            
        } else {
            // $('.navbar').removeClass('navbar-bg');
            $('.navbar').css('background-image', 'none');
            $('.subnav').removeClass('subnav-fixed');
        }
     });




 $(document).ready(function(){

            var empPhoto = $('.emp-hidden').text();
            var empAttr = $('.employee__img').attr('src', '/img/page-content/'+empPhoto+'');

            $(".subnav__menu__item").not('.first-item').on("click", function (event) {
                $('.subnav__menu__item').removeClass('subnav__menu__item--active');
                $(this).addClass('subnav__menu__item--active');
                //отменяем стандартную обработку нажатия по ссылке
                event.preventDefault();
                //забираем идентификатор бока с атрибута href
                var id  = $(this).children('a').attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                    top = $(id).offset().top;
                //анимируем переход на расстояние - top за 1500 мс

                $('body,html').animate({scrollTop: top}, 1500);

            });

                // open mobile-menu
                $('.burger').on('click', function(){
                    $('.mobile').addClass('is-visible');
                    $('.overlay').addClass('is-visible');
                });

                    $('.mobile__button').on('click', function(){
                    $('.mobile').removeClass('is-visible');
                    $('.overlay').removeClass('is-visible');
                });

        });


/* Modal */

$('.share-btn').click(function() {
    $('.modal-wrapper').show();
});

$('.via').click(function (event) {
    $('.via').removeClass('via-active');
    $(this).addClass('via-active');
    if($(this).hasClass('via-social')) {
        $('.social-box').css('display','block');
        $('.email-box').css('display','none');
    } else {
        $('.social-box').css('display','none');
        $('.email-box').css('display','flex');
    }
});

$('.modal-close').click(function() {
    $('.modal-wrapper').hide();
});


// Cards

$('.card-flip').click(function (event) {
    $(event.target).parents('.flipper').css('transform','rotateY(180deg)');
});

$('.flip-back').click(function (event) {
    $(event.target).parents('.flipper').css('transform','rotateY(0)');
});

// Show more

$('.recommended-cat').each(function() {

    //Количество элементов в категории
    sizeItems = $(this).children('.article-wrapper').length;

    //Начальное к-во элентов вывод
    x = 3;

    //Добавляем кновку show more
    if(sizeItems > x) {
        $(this).append('<button class="show-more"><i class="icon icon-plus"></i> mehr Anzeigen</button>');
    }

    //Выводим начальные эл-ты
    $(this).children('.article-wrapper:lt('+x+')').show();

    //При клике показываем показываем остальные
    $(this).children('.show-more').click(function() {
        
        $(this).siblings('.article-wrapper').show();
        $(this).hide();

    });

});
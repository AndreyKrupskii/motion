$(window).load(function(){
	$('.load').fadeOut(800);
});
$(document).ready(function(){
    function phoneMenu(){
        var current=0
        $('.phoneMenu_btn').on('click',function(){
            if (current%2===0)
            {
                $('.phoneMenu_btn').addClass('phoneMenu_btn-active');
                $('.nav_list-phone').slideDown();
            }
            else {
                $('.phoneMenu_btn').removeClass('phoneMenu_btn-active');
                $('.nav_list-phone').slideUp();
            }
            current++;
        });
        $('.nav_item-phone a').on('click',function(){
            $('.phoneMenu_btn').removeClass('phoneMenu_btn-active');
            $('.nav_list-phone').slideUp();
            current++;
        });
    }
    phoneMenu();
    function setPhoneMenuSize(){
        $('.nav_list-phone').css('width',$(window).width());
        $('.nav_list-phone').css('height',$(window).height()+89);
    }
    setPhoneMenuSize();
    function setHeaderSize(){
        $('header').css('width',$(window).width());
        $('header').css('height',$(window).height());
    }
    setHeaderSize();
    $(window).resize(function(){
        setPhoneMenuSize();
        setHeaderSize();
    })
    $('#slider').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: false,
        navText: [ ],
        dots: true,
        responsive:{
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 2,
                margin: 16,
                dots: true
            },
            1000:{
                items: 4,
                nav: true,
                loop: true
            }
        }
    });
    $('.tweetSlider').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: false,
        navText: [ ],
        dots: false,
        responsive:{
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 1,
                dots: false
            },
            1000:{
                items: 1,
                nav: true,
                loop: true
            }
        }
    });
    $('.nav_item').on('click',function(e){
        var scrollSpeed = 1300;
                var scrollTop = $(window).scrollTop();
                var id = $(this).data('slide');
                var goTo =  ($('.'+ id).offset().top)-60;
        e.preventDefault();
          $("html, body").animate({ scrollTop: goTo }, scrollSpeed);  
    });
    $('.nav_item-phone').on('click',function(e){
        var scrollSpeed = 1000;
                var scrollTop = $(window).scrollTop();
                var id = $(this).data('slide');
                var goTo =  $('.'+ id).offset().top-60;
        e.preventDefault();
          $("html, body").animate({ scrollTop: goTo }, scrollSpeed);  
    });
})();
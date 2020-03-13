$(document).ready(function () {
/*==================*/
/*nav bar*/
/*==================*/
$(".toggle-class").click(function() {
   $(".main-menu ul").slideToggle();
 })   
/*==================*/
/*SLIDER*/
/*==================*/
    $(".slider-active").owlCarousel({
        items: 1,
        loop: true,
        autoplay:false,
        autoplayTimeout: 3000,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
/*==================*/
/*WOW*/
/*==================*/
    new WOW().init();    
/*==================*/
/*Parallax*/
/*==================*/
$('.fox-info').parallax('100%',.5);
    
$('.contact').parallax('100%',.5);
/*==================*/
/*counter up*/
/*==================*/  
    
   $('.counter').counterUp({
                delay: 5,
                time: 4000
    });   
/*==================*/
/*student aboutus section*/
/*==================*/      
UIkit.lightboxPanel('.uk-button').show(animation);  
/*==================*/
/*contact section gmap*/
/*==================*/
});



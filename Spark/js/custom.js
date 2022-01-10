/**
* [Table of contents]
  1 header-fixed js
  2 menu-icon js 
  3 lazyload js
  4 wow js
  5 Banner Height Js
  6 Owl Carousal User Section JS
  7 Owl Carousal Our Investors Section JS
  8 Owl Carousal Investment Partners Section JS
  9 Owl Carousal Office Enviroment Section JS
  10 Owl New Opporunity Section JS
  11 Spark Team Portfolio js
  12 Acoordian Js
  13 Spinner Loader
/**
/* header-fixed js */
$(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
       $('header').addClass('fixed');
    } else {
       $('header').removeClass('fixed');
    }
});/* header-fixed js */
/* menu-icon js */
function myFunction(x) {
  x.classList.toggle("change");
}/* menu-icon js */
/** Navbar toggler **/
$(".navbar-toggler").click(function() {
        $('html').toggleClass('show-menu');
    });
/* Banner Height Js*/
function bannerheight(){
      var head_height = $("header").outerHeight(true);
      $("body").css("padding-top",head_height + "px")
    $(".banner-sec").css("min-height","calc(100vh - " + head_height + "px)")
  };
  bannerheight();
  $(window).resize(bannerheight);
/* Banner Height Js*/
/* Owl Carousal User Section JS*/
    $('#sync2').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    navContainer: ".slider-nav",
    navText: ["<img src='images/return-arrow.png'>","<img src='images/next-arrow.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/* Owl Carousal User Section JS*/
/* Owl Carousal Our Investors Section JS*/
  $('.our-investor').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
      navContainer: ".slider-nav1",
      navText: ["<img src='images/return-arrow.png'>","<img src='images/next-arrow.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) 
/* Owl Carousal Our Investors Section JS*/
/* Owl Carousal Investment Partners Section JS*/
  $('.investment-partners').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
      navContainer: ".slider-nav2",
      navText:["<img src='images/return-arrow.png'>","<img src='images/next-arrow.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) 
/* Owl Carousal Investment Partners Section JS*/
/* Owl Carousal Office Enviroment Section JS*/
  $('.office-enviroment').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    dots: false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
}) 
/* Owl Carousal Office Enviroment Section JS*/
/* Owl New Opporunity Section JS*/
  $('.new-oppo').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    dots: false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
}) 
/* Owl New Opporunity Section JS*/
/* Spark Team Portfolio js */
$('.gallary').isotope({
        itemSelector:'.items-img',    
      });
      $('.team-memebr ul li a').click (function(){
            $('.team-memebr ul li a').removeClass('active');
          $(this).addClass('active');
          var selector = $(this).attr("data-filter");
      $('.gallary').isotope({
        filter: selector
      });
      return false    
    });
/* Spark Team Portfolio js */
/***** Accordian js *********/
  var accordion = (function(){
  
  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');

  var settings = {
    speed: 400,
    oneOpen: false
  };
    
  return {
    init: function($settings) {
      $accordion_header.click(function() {
        accordion.toggle($(this));
      });
      
      $.extend(settings, $settings); 
      
      if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }
      
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function($this) {
            
      if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
               .find('> .js-accordion-item') 
               .removeClass('active')
               .find('.js-accordion-body')
               .slideUp()
      }
      
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();
$(document).ready(function(){
  accordion.init({ speed: 300, oneOpen: true });
  $(".loader").fadeOut("1500");
});
/***** Accordian js *********/



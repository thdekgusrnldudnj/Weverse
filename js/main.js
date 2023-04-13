(function ($ ,window) {

  const html = $('html');
  let page = 1;
  const head = $('header');
  const $window = $(window);

  html.animate({ scrollTop: 0 }, 10);

  $(".nav-menu ul").prepend($("#gnb ul").html());

  $(".btn_menu").click(function(){
    $("html").removeClass("menu-closed");
    $("html").addClass("menu-opened");
    return false;
  });

  $(".mobile-navigation .close").click(function(){
    $("html").removeClass("menu-opened");
    $("html").addClass("menu-closed");
    return false;
  });

  $('.foot-logo').on('click', function(){
    html.animate({ scrollTop: 0}, 0);
  });

  // // 섹션별 스와이퍼
  const sectionswiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    speed: 1000,
    allowTouchMove: true,
    breakpoints: {
      760: {
        allowTouchMove: false
      }
    },
    on: {
      slideChangeTransitionEnd: function(){
        if(this.activeIndex == 1){
            $(".sec1 .background").stop().animate({"top" : Math.round($('.sec1 .box').find('.cnt').offset().top)}, 1000);
        }
        else if(this.activeIndex == 2){
          $('.sec2').addClass('on');
        }
        else if(this.activeIndex == 5){
          $('.sec4 .number_area .numbering').find('.counter').eq(0).html('2,500');
          $('.sec4 .number_area .numbering').find('.counter').eq(1).html('98');
          $('.sec4 .number_area .numbering').find('.counter').eq(2).html('95.4');
          
          $('.counter').counterUp({
            delay: 10,
            time: 2000
          });
        }
      }
    }
  });

  // 메인스와이퍼
  const Slider1 = new Swiper('.sec_main .swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000
    }
  });

  const Slider2 = new Swiper('.sec2 .swiper', {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 60,
    navigation: {
      nextEl: '.sec2 .swiper-container .swiper-button-next',
      prevEl: '.sec2 .swiper-container .swiper-button-prev',
    },
    breakpoints: {
      1080 : {
        slidesPerView: 3,
      }
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }
  });

  const Slider3 = new Swiper('.sec3 .swiper', {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1080 : {
        slidesPerView: 4,
        touchRatio: 0,
        autoplay: false
      }
    }
  });

  const Slider4 = new Swiper('.sec1 .swiper', {
    loop: true,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1080 : {
        slidesPerView: 3,
        touchRatio: 0,
        autoplay: false
      }
    }
  });


})(window.jQuery, window);



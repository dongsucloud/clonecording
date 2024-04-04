var swiper = new Swiper(".mainevent", {
    
    pagination: {
      el: ".swiper-pagination", 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: false,
    clickable: true,

    keyboard: false,
    loof: true,
    speed: 200,
    autoplay: {
        delay: 3000,
    }
  });

  var swiper = new Swiper(".bestmenu", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    clickable: true,
    autoplay: {
      delay: 4000,
    },
    loof: true,
    mousewheel: false,
    speed: 400,
  });

  var swiper = new Swiper(".youtube", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    clickable: true,
    autoplay: {
      delay: 4000,
    },
    loof: true,
    mousewheel: false,
    speed: 400,
  });

  $(document).ready(function() {
    $(".list").mouseenter(function() {
        $(".subback").show();
    });

    $(".list").mouseleave(function() {
        $(".subback").hide(); 
    });
});
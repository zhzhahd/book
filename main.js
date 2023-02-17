$(document).ready(function () {

  //<!-- Initialize Swiper -->

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  // 메인 텍스트 이동  
  $('.maintext h1').css('transform', 'translateX(0)')
  $('.maintext p').css('transform', 'translateX(0)')
  $('.maintext button').css('transform', 'translateX(0)')
  $('.mainimg').css('transform', 'translateX(0)')

  let i = 0;

  function slide() {
    $('.maintext h1').css('transform', 'translateX(-300px)')
    $('.maintext p').css('transform', 'translateX(-400px)')
    $('.maintext button').css('transform', 'translateX(-500px)')
    $('.mainimg').css('transform', 'translateX(300px)')

    i++;
    if (i > $('.slide li:last').index()) {
      i = 0;
    }

    $('.slide li').eq(i).stop().fadeIn('slow').css('display', 'flex');
    $('.slide li').eq(i - 1).stop().fadeOut().css('display', 'flex');

    $('.maintext h1').css('transform', 'translateX(0)')
    $('.maintext p').css('transform', 'translateX(0)')
    $('.maintext button').css('transform', 'translateX(0)')
    $('.mainimg').css('transform', 'translateX(0)')
  }


  $('#prev').click(function () {
    slide();
  });
  $('#next').click(function () {
    slide();
  });



  // timesale 클릭 시 이동    
  function person() {
    $('#person_slide').stop().animate({ marginLeft: -1000 }, 500, function () {
      $('#person_slide li:first').appendTo('#person_slide');
      $('#person_slide').css({ marginLeft: 0 });
    });
  }

  setInterval(person, 4000);


  $('#prev1').click(function () {
    $('#book_slide ul li:last').prependTo('#book_slide ul');
    $('#book_slide ul').css({ marginLeft: -470 });
    $('#book_slide ul').stop().animate({ marginLeft: 0 }, 500);
  });

  $('#next1').click(function () {
    $('#book_slide ul').stop().animate({ marginLeft: -470 }, 500, function () {
      $('#book_slide ul li:first').appendTo('#book_slide ul');
      $('#book_slide ul').css({ marginLeft: 0 });
    });
  });

  // timesale의 book_slide
  $('.book_slide').mouseover(function () {
    $('.book_slide>button').css('display', 'block');
  }).mouseout(function () {
    $('.book_slide>button').css('display', 'none');
  });



});

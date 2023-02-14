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




  // API
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "lesson", size: 50 },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
  })
    .done(function (msg) {
      var boxs = document.getElementsByClassName('part_img');


      for (var i = 0; i < boxs.length; i++) {

        $(".part_img").eq(i).append('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 15);

        $(".part-1 h5").eq(i).append('<a href="sub.html">' + str2 + "</a>");
        $(".part-1 p").eq(i).append("&#8361;" + msg.documents[i].price);
      }

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


  //book1의 hover 사이드 메뉴
  $('.part_img').mouseover(function () {
    $(this).find('.action i').css('opacity','1').css('transform', 'translateX(0)');
  }).mouseout(function () {
    $(this).find('.action i').css('opacity','0').css('transform', 'translateX(-40px)');
  });












});
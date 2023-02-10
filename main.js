$(document).ready(function () {

  //<!-- Initialize Swiper -->

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
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



  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "lesson", size: 50 },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
  })
    .done(function (msg) {
      var boxs = document.getElementsByClassName('part_img');


      for (var i = 0; i < boxs.length; i++) {

        $(".part_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      }

    });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "lesson", size: 50 },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
  })
    .done(function (msg) {
      var boxs = document.getElementsByClassName('part-1');


      for (var i = 0; i < boxs.length; i++) {
        $(".part-1").eq(i).append("Type");

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 15);

        $(".part-1").eq(i).append('<a href="sub_book13.html">' + str2 + "</a>");
        $(".part-1").eq(i).append(msg.documents[i].price + " WON");
        $(".part-1").eq(i).append('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>' );

      }

    });


    $('.maintext h1').css('transform','translateX(0)')
    $('.maintext p').css('transform','translateX(0)')
    $('.maintext button').css('transform','translateX(0)')
    $('.mainimg').css('transform','translateX(0)')

  let i = 0;

  function slide(){
    $('.maintext h1').css('transform','translateX(-300px)')
    $('.maintext p').css('transform','translateX(-400px)')
    $('.maintext button').css('transform','translateX(-500px)')
    $('.mainimg').css('transform','translateX(300px)')

    i++;
    if (i > $('.slide li:last').index()) {
      i = 0;
    }

    $('.slide li').eq(i).stop().fadeIn('slow').css('display','flex');
    $('.slide li').eq(i - 1).stop().fadeOut().css('display','flex');

    $('.maintext h1').css('transform','translateX(0)')
    $('.maintext p').css('transform','translateX(0)')
    $('.maintext button').css('transform','translateX(0)')
    $('.mainimg').css('transform','translateX(0)')
  }

    // setInterval(slide, 3000);


      $('#prev').click(function(){
        slide();
      });
      $('#next').click(function(){
        slide();
      });













  });
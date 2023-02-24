$(document).ready(function(){

      // API
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "modern", size: 50 },
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

    // sub API
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "lesson", size: 50 },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
  })
    .done(function (msg) {
        console.log(msg)
        var str = msg.documents[0].title;
        var str2 = str.substring(0, 30);

        $("#book_title h2").append(str2);
        $("#book_title span").append("&#8361;" + msg.documents[0].price);
        $(".Book_Name").append(msg.documents[0].title);
        $("#top_menu ul li:last-child").append(msg.documents[0].title);
        $(".Author_Name").append(msg.documents[0].authors[0]);
        $(".publisher").append(msg.documents[0].publisher);
        $(".datetime").append(msg.documents[0].datetime);
    });

//book1의 hover 사이드 메뉴
$('.part_img').mouseover(function () {
    $(this).find('.action i').css('opacity','1').css('transform', 'translateX(0)');
  }).mouseout(function () {
    $(this).find('.action i').css('opacity','0').css('transform', 'translateX(-40px)');
  });

//gear 클릭 시 메뉴창
$('#gear_logo').click(function(){
  $('#gear').toggle();
  $('#gear').css('color','black');
});


//nav hover
$('nav> ul >li').hover(function(){
  $(this).children('ul').stop().slideDown();

},function(){
  $('nav >ul >li').children('ul').stop().slideUp();

});


});

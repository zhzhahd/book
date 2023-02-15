$(document).ready(function(){

// API
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "lesson", size: 50 },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
  })
    .done(function (msg) {
        console.log(msg)
        var str = msg.documents[0].title;
        var str2 = str.substring(0, 13);

        $("#book_title h2").append(str2);
        $("#book_title span").append("&#8361;" + msg.documents[0].price);
        $(".Book_Name").append(msg.documents[0].title);
        $(".Author_Name").append(msg.documents[0].authors[0]);
        $(".datetime").append(msg.documents[0].datetime[0]);
    });



    $.get("./sub_txt/txt1.txt", function (data) {
    $("#tmpBox").html(data);
    $("#book_buy p").html(data);
    })

    //book slide 
    $('#hide div div img').click(function(){
    $('#hide div div img').stop().css('border','none');
    $(this).css('border','1px solid #ccc');
    });

    $('pc_prev').click(function(){
        $('#hide div:last').prependTo('#hide');
        $('#hide div').css({margineLeft:-113});
        $('#hide div').stop().animate({margineLeft:0},500);
    });
















































});
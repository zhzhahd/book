$(document).ready(function(){

// // API
// $.ajax({
//     method: "GET",
//     url: "https://dapi.kakao.com/v3/search/book?target=title",
//     data: { query: "lesson", size: 50 },
//     headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
//   })
//     .done(function (msg) {
//         console.log(msg)
//         var str = msg.documents[0].title;
//         var str2 = str.substring(0, 30);

//         $("#book_title h2").append(str2);
//         $("#book_title span").append("&#8361;" + msg.documents[0].price);
//         $(".Book_Name").append(msg.documents[0].title);
//         $("#top_menu ul li:last-child").append(msg.documents[0].title);
//         $(".Author_Name").append(msg.documents[0].authors[0]);
//         $(".publisher").append(msg.documents[0].publisher);
//         $(".datetime").append(msg.documents[0].datetime);
//     });



$.get("./sub_txt/txt1.txt", function (data) {
$("#tmpBox").html(data);    
$("#Shipping").html(data);

var str = data.substring(0, 200);
$("#book_buy p").html(str+'...');
})


  



//book slide 
$('#hide div').click(function(){
$('#hide div').stop().css('border','none');
$(this).css('border','1px solid #ccc');
    // var i=$(this).index();
    console.log($(this).find('img').attr('src'));
    var src=$(this).find('img').attr('src');
    $('#pc_show img').attr('src',src);
});

$('#pc_prev').click(function(){
    $('#hide div:last').prependTo('#hide');
    $('#hide').css({marginLeft:-113});
    $('#hide').stop().animate({marginLeft:0},500);
});

$('#pc_next').click(function () {
    $('#hide').stop().animate({ marginLeft: -113 }, 500, function () {
        $('#hide div:first').appendTo('#hide');
        $('#hide').css({ marginLeft: 0 });
    });
    });







// detail의 ul  
$('#detail_Drescription').click(function(){
    $('#Reviews').stop().hide();
    $('#tmpBox').stop().show();
    $('#Shippng').stop().hide();
});
$('#detail_Comments').click(function(){
    $('#Reviews').stop().hide();
    $('#tmpBox').stop().hide();
    $('#Shippng').stop().hide();
});
$('#detail_Reviews').click(function(){
    $('#Reviews').stop().show();
    $('#tmpBox').stop().hide();
    $('#Shippng').stop().hide();
});
$('#detail_Size').click(function(){
    $('#Reviews').stop().hide();
    $('#tmpBox').stop().hide();
    $('#Shippng').stop().hide();
});
$('#detail_shipping').click(function(){
    $('#Reviews').stop().hide();
    $('#tmpBox').stop().hide();
    $('#Shipping').stop().show();
});


});
$(document).ready(function(){

//text 파일 삽입
$.get("./sub_txt/txt1.txt", function (data) {
$("#tmpBox").html(data); 

var str = data.substring(0, 200);
$("#book_buy p").html(str+'...');
})

$.get("./sub_txt/txt2.txt", function (data) {  
$("#Shipping").html(data);
})

//book slide 
$('#hide div').click(function(){
$('#hide div').stop().css('border','none');
$(this).css('border','1px solid #ccc');
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
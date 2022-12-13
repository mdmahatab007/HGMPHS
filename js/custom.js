(function($){
    'use strict'
//code start

//mobile-nav-start
$('.fa-bars').on('click',function(){
    $('.mobile-nav').slideToggle();
    $('.fa-bars').addClass('fa-times-click');
});
$('.mobile-icon').on('click',function(){
    $('.mobile-nav').slideToggle();
    $('.fa-bars').removeClass('fa-times-click');
});
$(window).resize(function(){
    var screensize = $(window).width();
    if (screensize > 768){
        $('.mobile-nav').hide();
    }
});

//mobile-nav-end

//stu deatils

$('.stuBtn1').on('click',function(){
    $('.stu-details').slideToggle();
    $('.stuDetails1').show();
    $('.stuDetails2').hide();
    $('.stuDetails3').hide();
    $('.stuDetails4').hide();
    $('.stuDetails5').hide();
});

$('.stuDetails-icon i').on('click',function(){
    $('.stu-details').toggle();
});
//

$('.stuBtn2').on('click',function(){
    $('.stu-details').slideToggle();
    $('.stuDetails1').hide();
    $('.stuDetails2').show();
    $('.stuDetails3').hide();
    $('.stuDetails4').hide();
    $('.stuDetails5').hide();
});
//
$('.stuBtn3').on('click',function(){
    $('.stu-details').slideToggle();
    $('.stuDetails1').hide();
    $('.stuDetails2').hide();
    $('.stuDetails3').show();
    $('.stuDetails4').hide();
    $('.stuDetails5').hide();
});
//
$('.stuBtn4').on('click',function(){
    $('.stu-details').slideToggle();
    $('.stuDetails1').hide();
    $('.stuDetails2').hide();
    $('.stuDetails3').hide();
    $('.stuDetails4').show();
    $('.stuDetails5').hide();
});
//
$('.stuBtn5').on('click',function(){
    $('.stu-details').slideToggle();
    $('.stuDetails1').hide();
    $('.stuDetails2').hide();
    $('.stuDetails3').hide();
    $('.stuDetails4').hide();
    $('.stuDetails5').show();
});











}) (jQuery)
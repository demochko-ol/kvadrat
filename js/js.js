$(function(){
	"use strict";
	$('.bxslider').bxSlider({
		adaptiveHeight: true,
	});

    changeImg();

    $(window).resize(function(){
        changeImg();          

        if($(window).width() > 767){
            var header = $('.header'),
                corner = $('.corner');

            corner.removeClass('open_corner');
            header.removeClass('open_menu');
           
            $('body').removeClass('noscroll move-right');
        }
    });

//For opening main menu
    $('.btn-menu').click(function() {
        var header = $('.header'),
            corner = $('.corner');

        corner.toggleClass('open_corner');
        header.toggleClass('open_menu');
        $('body').toggleClass('noscroll move-right');
        return false;
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('.header').addClass('header-scroll');
        }else{
            $('.header').removeClass('header-scroll');
        }
    });

//For PopUp
    $('.open_popup').click(function() {
        var popup_id = $('#' + $(this).attr("name")),
            popup_height = $(popup_id).height(),
            win_height = $(document).height();
        
        $(popup_id).show();
        $('body').addClass('noscroll');
        $('.overlay').show();
        
        $(popup_id).click( function(event){
            if( $(event.target).closest('.popup').length ) 
            return; 
            hidePopup();
        });        
    });

    $('.popup .close').click(function() {
        hidePopup();
    });

    function hidePopup(){
        $('.overlay, .popup_wrap').hide();
        if(!$('.header').hasClass('open_menu')){
            $('body').removeClass('noscroll');
        }
    }

//For payment method
    $('.method a').click(function(){
        $('.method a').removeClass('active')
        $(this).addClass('active');
        if($(this).hasClass('card active')){
            $('.info').hide();
            $('.card-form').show();
        }else{

            $('.card-form').hide();
        }
    });




//for Markers
    $('.marker').click(function(){
        $(".marker").parent().removeClass('show');
        $(this).parent().toggleClass('show');
    });

    $('.marker-content .close').click(function(){
        $(this).parents('.marker-wrap').removeClass('show');
    });

    $(document).mouseup(function (e){ 
        var div = $(".marker-content"); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
            div.parents('.marker-wrap').removeClass('show');
        }
    });

//For delivery map
    function changeImg(){
        if($('.delivery').width() <= 750){

            $(".map_delivery img").attr("src","images/map_delivery1.png");  
        }else{
            $(".map_delivery img").attr("src","images/map_delivery.png");
        }
    }


});


(function($) { 
		  
$(document).ready(function(){
	$('.slide').prepend('<div class="patternOverlay"></div>');	
	
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},7000);
	});
	
	$('.skillbar').each(function(){
		$(this).find('.skill-bar-percent').animate({
			left:$(this).attr('data-percent')
		},7000);
	});
	
	$('.skillbar').each(function(){
		$(this).find('.skill-bar-percent').text($(this).attr('data-percent'));
	});
});	


	
/*===========================================================*/
	/*	Preloader 
/*===========================================================*/	
//<![CDATA[
	$(window).load(function() {
		$("#status").fadeOut(); 
		$("#preloader").delay(350).fadeOut("slow");
	})
		  
$(window).load(function(){
	$('button.navbar-toggle').click(function(){
		$(this).toggleClass('active');
		$('.navbar-collapse').slideToggle();										 
	});					
});
var windowWidth = $(window).width();
var windowHeight =$(window).height();
$('.banner').css({'height':windowHeight });


$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 



jQuery(function() {
	var $chosenSheet,
	$stylesheets = $( "a[id^=theme-]" );
	
	$( ".lb" ).rlightbox();
	$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});
});
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -16
        }, 1000);
        return false;
      }
    }
  });
});

$(window).load(function(){
  $('.flexslider').flexslider({
	animation: "fade",
	animationLoop: true,
	slideshow: true,
	pauseOnAction: false,
	slideshowSpeed: 7000,
	controlNav: true,
	start: function(slider){
	  $('body').removeClass('loading');
	}
  });
});


$(window).load(function(){
      $('.worklogo').flexslider({
        animation: "slide",
		slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        
      });
    });



}(jQuery));

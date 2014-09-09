var windowWidth = $(window).width();
var windowHeigth = $(window).height();
console.log(windowHeigth);
// animates my initials until full name is displayed
$(document).ready(function() {
	if(windowWidth > 768){
		$('#last-initial').animate({'margin-left' : '68%'}, 1095);
		$('#last-initial').delay(0).animate({'margin-left' : '0%'});
		$('#first-name').delay(1090).fadeIn(3000);
		$('#last-name').delay(1100).fadeIn(3000);
	}
	else {
		$('#first-initial').delay(500).animate({'color' : '#DDD'}, 1000);
		$('#last-initial').delay(500).animate({'color' : '#DDD'}, 1000);
		$('#first-name').fadeIn(3000);
		$('#last-name').fadeIn(3000);
	}
	if(windowHeigth < 460){
		summaryToggle++;
		$('nav.top-bar').css({'height' : '15%'});
		$('.main-content-sub').css({'display' : 'none'});
		$('.about-me-text, .portfolio-text').css({'font-size' : '1em'});
		$('.heading-text').css({'font-size' : '0.8em'});
		$('#title-text').css({'font-size' : '1.5em'});
		$('.footer-container').css({'height' : '20%'});
		$('.close-skills').css({'display' : 'inline'});
		$('.skills-click').click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $(".headache").css({ 'background-color': 'rgba(0, 0, 0, 0.8'});
      $(".headache").css({ 'margin-top': '-7%'});
      $('.headache').click(function() {
        $('.footer-container').fadeOut('fast');
      });
      return false;
		});
	}
	if(windowWidth < 550){
		$('.main-content-sub').css({'display' : 'none'});
	}
});
//-----
var toggleState = 0;
var summaryToggle = 1;

$('.about-me').click(function(){
  $('.main-content-sub').slideToggle('slow');
  $('.footer-container').fadeOut('slow');
  summaryToggle++;
});
$('.main-content').click(function(){
  $('.main-content-sub').slideToggle('slow');
  $('.footer-container').fadeOut('slow');
  summaryToggle++;
});

$('.portfolio').click(function(){
	$('.footer-container').fadeOut(1000);
	$(".made-by").slideToggle(800);
	if(windowWidth > 641){
		$('.projects-content').animate({'width': '90%'});
		$('.projects-content-sub').delay(400).slideToggle(1000);
		// closes 'skills' bar when portfolio opens
		$('.footer-container').css({'display' : 'none'});
	}
	else {
		$('.projects-content-sub').delay(400).slideToggle(1000);
	}
	hideSelect();
	toggleState++;
});

$('.portfolio-click').click(function(){
	$('.footer-container').fadeOut(1000);
	$(".made-by").slideToggle(800);
	if(windowWidth > 641){
		$('.projects-content').animate({'width': '90%'});
		$('.projects-content-sub').delay(400).slideToggle(1000);
		// closes 'skills' bar when portfolio opens
	}
	else {
		$('.projects-content-sub').delay(400).slideToggle(1000);
	}
	hideSelect();
	toggleState++;
});

$('.med-text').click(function() {
	$('.activated').removeClass('activated');
});

$('.contact-animate').click(function(){
	if ($(".arrow").css("display") == "none" ){
		$('.small-mail-animate').delay(1500).fadeIn('slow');
		$('.small-mail-animate').animate({'margin-top' : '100%'}, 2000);
	}
	else {
		$('.contact-form-filler').delay(500).animate({'margin-left' : '45%'}, 1000);
		$('.contact-message').delay(1500).fadeIn('slow');
		$('.mail-animate').delay(1500).fadeIn('slow');
		$('.mail-animate').animate({'margin-top' : '100%'}, 2000);
		$('.arrow').delay(2800).animate({'margin-left' : '-100%'}, 1000);
	}
});


function hideSelect() {
	if(toggleState % 2 !== 0){
		$('.hidden-select').fadeOut(1000);
	}
	else {
		$('.hidden-select').fadeIn(2000);
	}
}

// portfolio clickable tabs coloring
$('#activated1').click(function() {
	$(this).css({'color' : '#ddd'});
	$('#activated2').css({'color' : '#555555'});
	$('#activated3').css({'color' : '#555555'});
});
$('#small-activated1').click(function() {
	$(this).css({'color' : '#ddd'});
	$('#activated2').css({'color' : '#555555'});
	$('#activated3').css({'color' : '#555555'});
});
$('#activated2').click(function() {
	$(this).css({'color' : '#ddd'});
	$('#activated1').css({'color' : '#555555'});
	$('#activated3').css({'color' : '#555555'});
	$('#small-activated1').css({'color' : '#555555'});
});
$('#activated3').click(function() {
	$('.photography-loading').css({'display' : 'block'});
	$(this).css({'color' : '#ddd'});
	$('.photography-loading').delay(4000).animate({'opacity' : '0'});
	$('#activated1').css({'color' : '#555555'});
	$('#activated2').css({'color' : '#555555'});
	$('#small-activated1').css({'color' : '#555555'});
});

// footer/skills animations
$('.skills-click').click(function(){
	$('.footer-container').slideToggle('fast');
	$('.headache').delay(4000).fadeIn(2000);
	$('.hidden-select').fadeOut(1000);
	if(windowHeigth > 460)
		$('.headache').delay(20000).fadeOut(2000);
	if(windowWidth > 768){
		$('.skills-body-top').animate({'margin-left' : '-85%'}, 20000, 'linear');
	}
	else {
		$('.skills-body-top').animate({'margin-left' : '-100%'}, 40000, 'linear');
	}
	if(toggleState % 2 !== 0){
		$('.projects-content-sub').slideToggle(2000);
		$(".made-by").slideToggle(800);
		toggleState++;
	}
	if(summaryToggle % 2 !==0){
		$('.main-content-sub').slideToggle('slow');
		summaryToggle++;
	}
});

$('#ticker-title1').click(function() {
	$(this).css({'color' : '#FFFF00'});
	$('#ticker-title2').css({'color' : '#555555'});
	$('.skills-body-top').css({'display' : 'block'});
	$('#small-ticker-title2').css({'color' : '#555555'});
	$('.software-skills').css({'display' : 'none'});
});

$('#ticker-title2').click(function() {
	$(this).css({'color' : '#FFFF00'});
	$('#ticker-title1').css({'color' : '#555555'});
	$('.software-skills').css({'display' : 'block'});
	$('.skills-body-top').css({'display' : 'none'});
	$('.software-skills').animate({'margin-left' : '-100%'}, 36000, 'linear');
});
$('#small-ticker-title2').click(function() {
	$(this).css({'color' : '#FFFF00'});
	$('#ticker-title1').css({'color' : '#555555'});
	$('.software-skills').css({'display' : 'block'});
	$('.skills-body-top').css({'display' : 'none'});
	$('.software-skills').animate({'margin-left' : '-100%'}, 44000, 'linear');
});

$('.skills-body-top, .software-skills').bind('scroll touchsmart touchmove onscroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
 if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel" || e.type == "touchmove"){
  $('.skills-body-top, .software-skills').stop();
 }
});

// blinking 'select' option in skills
function blinker() {
    $('#skill-select').fadeOut(500);
    $('#skill-select').fadeIn(500);
}
setInterval(blinker, 1500);

//-----
$('.portfolio').hover(
	function(){
		$('.portfolio-text').css({'color': '#29ABA4'});
	},
	function(){
		$('.portfolio-text').css({
			'color': '#DDDDDD'
		}, 'slow');
  }
);
$('.portfolio-text').hover(
	function(){
		$('.portfolio-text').css({'color': '#29ABA4'});
	},
	function(){
		$('.portfolio-text').css({
			'color': '#DDDDDD'
		}, 'slow');
  }
);
$('.portfolio-text').hover(
	function(){
		$('.port-text-header').css({'color': '#29ABA4'});
	},
	function(){
		$('.portfolio-text').css({
			'color': '#DDDDDD'
		}, 'slow');
  }
);
$('.about-me').hover(
	function(){
		$('.about-me-text').css({'color': '#29ABA4'});
	},
	function(){
		$('.about-me-text').css({
			'color': '#DDDDDD'
		}, 'slow');
  }
);
$('.about-me-text').hover(
	function(){
		$('.about-me-text').css({'color': '#29ABA4'});
	},
	function(){
		$('.about-me-text').css({
			'color': '#DDDDDD'
		}, 'slow');
  }
);
$('.red5').hover(
	function(){
		$('.red5').css({'color': 'steelblue'}, 1000);
	},
	function(){
		$('.red5').css({
			'color': '#DDDDDD'
		}, '2000');
  }
);
$('.red9').hover(
	function(){
		$('.red9').css({'color': 'steelblue'}, 1000);
	},
	function(){
		$('.red9').css({
			'color': '#DDDDDD'
		}, '2000');
  }
);
$('.red14').hover(
	function(){
		$('.red14').css({'color': 'steelblue'}, 1000);
	},
	function(){
		$('.red14').css({
			'color': '#DDDDDD'
		}, '2000');
  }
);
$(function() {
  setTimeout(function(){
    $('#notice').slideUp(800);
  }, 1500);
});

//animations on startup -------------->
$(document).ready(function() {
	// ribbons flow over and up side bar
	if(windowWidth > 640){
		$('.ribbon1').animate({'width' : '80%'}, 2000, 'linear');
		$('.ribbon2').animate({'width' : '80%'}, 1500, 'linear');
		$('.ribbon3').animate({'width' : '80%'}, 1000, 'linear');
		$('.footer-text').delay(1000).fadeIn(2000);
		$('.ribbon1-right').delay(2200).animate({'width' : '100%'}, 500);
		$('.ribbon2-right').delay(1700).animate({'width' : '100%'}, 500);
		$('.ribbon3-right').delay(1200).animate({'width' : '100%'}, 500);
		$('.background-cover').animate({'width' : '100%'}, 2000);
	}
	else {
		$('.footer-text').delay(500).fadeIn(1000);
		$('.ribbon1').animate({'width' : '80%'}, 1500, 'linear');
		$('.ribbon2').animate({'width' : '80%'}, 1000, 'linear');
		$('.ribbon3').animate({'width' : '80%'}, 500, 'linear');
		$('.ribbon1-right').delay(1700).animate({'width' : '100%'}, 500);
		$('.ribbon2-right').delay(1200).animate({'width' : '100%'}, 500);
		$('.ribbon3-right').delay(700).animate({'width' : '100%'}, 500);
		$('.background-cover').animate({'width' : '100%'}, 2000);
	}
});
// resume modal sizing ------------->
if(windowWidth > 640){
	$('.my-resume-top').css({'height' : windowWidth - 200});
}
else {
	$('.my-resume-top').css({'height' : windowWidth + 200});
}
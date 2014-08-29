var windowWidth = $(window).width();
// animates my initials until full name is displayed
$(document).ready(function() {
	if(windowWidth > 768){
		$('#last-initial').animate({'margin-left' : '68%'}, 1095);
		$('#last-initial').delay(0).animate({'margin-left' : '0%'});
		$('#first-name').delay(1090).fadeIn(3000);
		$('#last-name').delay(1100).fadeIn(3000);
	}
	else {
		$('#first-name').fadeIn(3000);
		$('#last-name').fadeIn(3000);
	}
});
//-----
$('.about-me').click(function(){
  $('.main-content-sub').slideToggle('slow');
});
$('.main-content').click(function(){
  $('.main-content-sub').slideToggle('slow');
});

$('.portfolio').click(function(){
	if(windowWidth > 768){
		$('.projects-content').animate({'width': '90%'});
		$('.projects-content-sub').delay(400).slideToggle(1000);
		// closes 'skills' bar when portfolio opens
		$('.footer-container').css({'display' : 'none'});
	}

});
$('.portfolio-click').click(function(){
	if(windowWidth > 768){
		$('.projects-content').animate({'width': '90%'});
		$('.projects-content-sub').delay(400).slideToggle(1000);
		// closes 'skills' bar when portfolio opens
		$('.footer-container').css({'display' : 'none'});
	}
	else {
		$('.projects-content-sub').delay(400).slideToggle(1000);
	}
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
		$('.inner-form').delay(500).animate({'margin-left' : '55%'}, 1000);
		$('.contact-message').delay(1500).fadeIn('slow');
		$('.mail-animate').delay(1500).fadeIn('slow');
		$('.mail-animate').animate({'margin-top' : '100%'}, 2000);
		$('.arrow').delay(2200).animate({'margin-left' : '10%'}, 1000);
	}
});



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
	$(this).css({'color' : '#ddd'});
	$('#activated1').css({'color' : '#555555'});
	$('#activated2').css({'color' : '#555555'});
	$('#small-activated1').css({'color' : '#555555'});
});

// footer/skills animations
$('.skills').click(function(){
	$('.footer-container').slideToggle('fast');
	$('.skills-body-top').animate({'margin-left' : '-85%'}, 23000);
	$('.headache').delay(5000).fadeIn(2000);
	$('.headache').delay(15000).fadeOut(2000);
});

$('#ticker-title1').click(function() {
	$(this).css({'color' : '#FFFF00'});
	$('#ticker-title2').css({'color' : '#555555'});
});
$('#ticker-title2').click(function() {
	$(this).css({'color' : '#FFFF00'});
	$('#ticker-title1').css({'color' : '#555555'});
});
// blinking 'select' option in skills
function blinker() {
    $('#skill-select').fadeOut(500);
    $('#skill-select').fadeIn(500);
}
setInterval(blinker, 2700);
//-----
$('.portfolio').hover(
	function(){
		$('.portfolio-text').css({'color': '#FE123C'});
	},
	function(){
		$('.portfolio-text').css({
			'color': '#DDDDDD'
		}, 'slow');
  }
);
$('.portfolio-text').hover(
	function(){
		$('.portfolio-text').css({'color': '#FE123C'});
	},
	function(){
		$('.portfolio-text').css({
			'color': '#DDDDDD'
		}, 'slow');
  }
);
$('.portfolio-text').hover(
	function(){
		$('.port-text-header').css({'color': '#FE123C'});
	},
	function(){
		$('.portfolio-text').css({
			'color': '#DDDDDD'
		}, 'slow');
  }
);
$('.about-me').hover(
	function(){
		$('.about-me-text').css({'color': '#FE123C'});
	},
	function(){
		$('.about-me-text').css({
			'color': '#DDDDDD'
		}, 'slow');
  }
);
$('.about-me-text').hover(
	function(){
		$('.about-me-text').css({'color': '#FE123C'});
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
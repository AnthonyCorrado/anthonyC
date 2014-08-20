$('.about-me').click(function(){
    $('.main-content-sub').slideToggle('slow');
});
$('.about-me-text').click(function(){
    $('.main-content-sub').slideToggle('slow');
});
$('.portfolio').click(function(){
    $('.projects-content-sub').slideToggle(1000);
});
$('.portfolio-text').click(function(){
    $('.projects-content-sub').slideToggle(1000);
});
$('.portfolio').hover(
	function(){
		$('.portfolio-text').css({'color': '#FE123C'});
	},
	function(){
		$('.portfolio-text').css({
			'color': '#FEFEFE'
		}, 'slow');
  }
);
$('.portfolio-text').hover(
	function(){
		$('.portfolio-text').css({'color': '#FE123C'});
	},
	function(){
		$('.portfolio-text').css({
			'color': '#FEFEFE'
		}, 'slow');
  }
);
$('.portfolio-text').hover(
	function(){
		$('.port-text-header').css({'color': '#FE123C'});
	},
	function(){
		$('.portfolio-text').css({
			'color': '#FEFEFE'
		}, 'slow');
  }
);
$('.about-me').hover(
	function(){
		$('.about-me-text').css({'color': '#FE123C'});
	},
	function(){
		$('.about-me-text').css({
			'color': '#FEFEFE'
		}, 'slow');
  }
);
$('.about-me-text').hover(
	function(){
		$('.about-me-text').css({'color': '#FE123C'});
	},
	function(){
		$('.about-me-text').css({
			'color': '#FEFEFE'
		}, 'slow');
  }
);
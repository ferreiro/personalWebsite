	var solidBg = $('.panelBackgroundSolid'),
		background = $('.panelBackground'),
		panel = $('.panel'),
		footer = $('.footerWrap');
	

	initialEffect();

	function initialEffect() { 
		var time = 800;

		solidBg.slideDown(time);
		background.delay(time).fadeIn(time + 200);
		footer.delay(time).fadeIn(time / 2);
		panel.delay(time).fadeIn(time + 200);
		

 	}
 
var avatar = $('.background'),
	wWidth = $( window ).width(),
	wHeight = $( window ).height();

	// $(window).resize(function() {
	// 	alert("go")
	// });

	resizeBackground();
  
	function resizeBackground() {
		var wHeight = $( window ).height();
		if ( wWidth <= 1000 ) {
			$('.background').prepend("<div id="polla"></div>");
			// avatar.height(wHeight / 1.5);
		}
		else {
			avatar.removeAttr('height');
		}
	}

		
 
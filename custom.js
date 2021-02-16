var width = $(window).width();
var height = $(window).height();

$(window).on('scroll', function(){
	
	if ($(window).scrollTop() > 300) {
		$("#back-to-top-btn").addClass("show");
	}else{
		$("#back-to-top-btn").removeClass("show");
	}
});


$(document).ready(function (){
	$("#back-to-top-btn").click(function() {
		var scroll = new SmoothScroll();
		var anchor = document.querySelector('#journal-cover');
		var toggle = document.querySelector('#back-to-top-btn');
		var options = { speed: 1000, easing: 'easeOutCubic' };
        scroll.animateScroll(anchor, toggle, options);
	});
})

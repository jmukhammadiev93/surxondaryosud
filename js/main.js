
	$(document).ready(function($){
		
		$('.new').owlCarousel({
			loop: true,
			lazyLoad: true,
			margin: 25,
			dots: true,
			nav: false,
			autoplay: true,
			// autoplayTimeout: 5000,
			// smartSpeed: 800,
			// autoplayHoverPause: true,
			slideTransition: 'linear',
			autoplaySpeed: 3000,
			smartSpeed: 3000,
			autoplayHoverPause: true,
			items: 3,
			responsive: {
				0: {
					items: 1,
					margin: 15
				},
				768: {
					items: 2,
					margin: 20
				},
				1071: {
					items: 3,
					margin: 20
				},
				1480: {
					margin: 25
				}
			}
		});

		$('.custom').owlCarousel({
			autoplaySpeed:4000,
			dots:false,
			autoplay: true,
			autoplayTimeout: 4000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true,
			loop:true,
			margin:0,
			nav: false,
			dots: false,
			autoHeight: false,
			mouseDrag: false,
		    autoplayHoverPause:true,
			items: 1,
		});

		$("a").click(function(e){
			e.preventDefault();
		
	  });
	
	 
	});
	

	 
$(window).on('load', function() {
    	$('#firsModal').modal('show')
})


 
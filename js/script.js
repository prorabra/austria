

    var $dropdowns = $('.dropdown');
$dropdowns.click(function() {
  if ( $(this).hasClass('active') ){
    $(this).toggleClass('active');
  } else {
    $dropdowns.removeClass('active');
    $(this).toggleClass('active');
  }
});

$(document).ready(function() {
$('.img-link').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
});


// $(window).on ('load', function(){
//   $('.loader_inner').fadeOut();
//   $('.loader').delay(400).fadeOut('slow');
// });


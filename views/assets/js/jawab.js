$( function() {
$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-heading').removeClass('active');
});
});

jQuery(document).ready(function(){
    //   insert back to top button dynamicly
     $( "#backToTop" ).append('<a class="backToTop" href="javascript:void(null);" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
      var $window = $(window);
      var distance = 80;
        // scroll
      $window.scroll(function() {
        // header
        if($window.scrollTop() >= distance) {
          $(".backToTop").fadeIn();
        }else{
          $(".backToTop").fadeOut();
        }
      });
      
      $('.backToTop').click(function() {
        $('html, body').animate({
                scrollTop: 0
            }, 800);
     });
    })


//     //animasi fadein
//     // Trigger CSS animations on scroll.
// // Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// // Looking for a version that also reverses the animation when
// // elements scroll below the fold again?
// // --> Check https://codepen.io/bramus/pen/vKpjNP

// jQuery(function($) {
  
//   // Function which adds the 'animated' class to any '.animatable' in view
//   var doAnimations = function() {
    
//     // Calc current offset and get all animatables
//     var offset = $(window).scrollTop() + $(window).height(),
//         $animatables = $('.animatable');
    
//     // Unbind scroll handler if we have no animatables
//     if ($animatables.length == 0) {
//       $(window).off('scroll', doAnimations);
//     }
    
//     // Check all animatables and animate them if necessary
// 		$animatables.each(function(i) {
//        var $animatable = $(this);
// 			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
//         $animatable.removeClass('animatable').addClass('animated');
// 			}
//     });

// 	};
  
//   // Hook doAnimations on scroll, and trigger a scroll
// 	$(window).on('scroll', doAnimations);
//   $(window).trigger('scroll');

// });



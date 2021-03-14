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


    //animasi fadein
    // Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

//Autocomplete

$(document).ready(function(){
  
  var $terms = [
    'search',
    'test',
    'css',
    'apple',
    'bear',
    'cat',
    'crabapple',
    'creep',
    'czar',
    'danger',
    'dominant',
    'doppler',
    'everclear',
    'evangelism',
    'frodo'
     ].sort(),
     $return = [];
    
  function strInArray(str, strArray) {
    for (var j=0; j<strArray.length; j++) {
      if (strArray[j].match(str) && $return.length < 5) {
        var $h = strArray[j].replace(str, '<strong>'+str+'</strong>');
        $return.push('<li class="prediction-item"><span class="prediction-text">' + $h + '</span></li>');
      }
    }
  }
    
  function nextItem(kp) {
    if ( $('.focus').length > 0 ) {
      var $next = $('.focus').next(),
          $prev = $('.focus').prev();
    }
    
    if ( kp == 38 ) { // Up
    
      if ( $('.focus').is(':first-child') ) {
        $prev = $('.prediction-item:last-child');
      }
      
      $('.prediction-item').removeClass('focus');
      $prev.addClass('focus');
      
    } else if ( kp == 40 ) { // Down
    
      if ( $('.focus').is(':last-child') ) {
        $next = $('.prediction-item:first-child');
      }
      
      $('.prediction-item').removeClass('focus');
      $next.addClass('focus');
    }
  }
  
  $(function(){  
    $('#search-programstudi').keydown(function(e){
      $key = e.keyCode;
      if ( $key == 38 || $key == 40 ) {
        nextItem($key);
        return;
      }
      
      setTimeout(function() {
        var $search = $('#search-programstudi').val();
        $return = [];
        
        strInArray($search, $terms);
        
        if ( $search == '' || ! $('input').val ) {
          $('.output').html('').slideUp();
        } else {
          $('.output').html($return).slideDown();
        }
    
        $('.prediction-item').on('click', function(){
          $text = $(this).find('span').text();
          $('.output').slideUp(function(){
            $(this).html('');
          });
          $('#search-programstudi').val($text);
        });
        
        $('.prediction-item:first-child').addClass('focus');
        
      }, 50);
    });
  });
    
    $('#search-programstudi').focus(function(){
      if ( $('.prediction-item').length > 0 ) {
        $('.output').slideDown();
      }
      
      $('#searchform').submit(function(e){
        e.preventDefault();
        $text = $('.focus').find('span').text();
        $('.output').slideUp();
        $('#search-programstudi').val($text);
        $('input').blur();
      });
    });
    
    $('#search-programstudi').blur(function(){
      if ( $('.prediction-item').length > 0 ) {
        $('.output').slideUp();
      }
    });
    
  });


  //autocompletematkul
  
$(document).ready(function(){
  
  var $matkul = [
    'search1',
    'test1',
    'css1',
    'apple1',
    'bear1',
    'cat1',
    'crabapple1',
    'creep1',
    'czar1',
    'danger1',
    'dominant1',
    'doppler1',
    'everclear1',
    'evangelism1',
    'frodo1'
     ].sort(),
     $return = [];
    
  function strInArray(str, strArray) {
    for (var j=0; j<strArray.length; j++) {
      if (strArray[j].match(str) && $return.length < 5) {
        var $h = strArray[j].replace(str, '<strong>'+str+'</strong>');
        $return.push('<li class="prediction-matkul-item"><span class="prediction-matkul-text">' + $h + '</span></li>');
      }
    }
  }
    
  function nextItem(kp) {
    if ( $('.focus').length > 0 ) {
      var $next = $('.focus').next(),
          $prev = $('.focus').prev();
    }
    
    if ( kp == 38 ) { // Up
    
      if ( $('.focus').is(':first-child') ) {
        $prev = $('.prediction-matkul-item:last-child');
      }
      
      $('.prediction-matkul-item').removeClass('focus');
      $prev.addClass('focus');
      
    } else if ( kp == 40 ) { // Down
    
      if ( $('.focus').is(':last-child') ) {
        $next = $('.prediction-matkul-item:first-child');
      }
      
      $('.prediction-matkul-item').removeClass('focus');
      $next.addClass('focus');
    }
  }
  
  $(function(){  
    $('#search-matkul').keydown(function(e){
      $key = e.keyCode;
      if ( $key == 38 || $key == 40 ) {
        nextItem($key);
        return;
      }
      
      setTimeout(function() {
        var $search = $('#search-matkul').val();
        $return = [];
        
        strInArray($search, $matkul);
        
        if ( $search == '' || ! $('input').val ) {
          $('.output-matkul').html('').slideUp();
        } else {
          $('.output-matkul').html($return).slideDown();
        }
    
        $('.prediction-matkul-item').on('click', function(){
          $text = $(this).find('span').text();
          $('.output-matkul').slideUp(function(){
            $(this).html('');
          });
          $('#search-matkul').val($text);
        });
        
        $('.prediction-matkul-item:first-child').addClass('focus');
        
      }, 50);
    });
  });
    
    $('#search-matkul').focus(function(){
      if ( $('.prediction-matkul-item').length > 0 ) {
        $('.output-matkul').slideDown();
      }
      
      $('#searchform').submit(function(e){
        e.preventDefault();
        $text = $('.focus').find('span').text();
        $('.output-matkul').slideUp();
        $('#search-matkul').val($text);
        $('input').blur();
      });
    });
    
    $('#search-matkul').blur(function(){
      if ( $('.prediction-matkul-item').length > 0 ) {
        $('.output').slideUp();
      }
    });
    
  });

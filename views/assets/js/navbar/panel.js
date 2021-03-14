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
    

$(document).ready(function(){

    // Scroll to top 

	$(window).scroll(function (){
        if($(this).scrollTop() > 300){
            $("#scrollToTop").fadeIn();
        }
        else{
            $("#scrollToTop").fadeOut();
        }
    })

    $('#scrollToTop').click(function(){
        $('html').animate({scrollTop : 0}, 800);
      });

    // Responsive navigation 

      $("#collapse-button").click(function (){
          $("#navigationUl").slideToggle("slow");
      })

   // About us 

   var $animation_elements = $('.animation-element');
   var $window = $(window);
   
   function check_if_in_view() {
     var window_height = $window.height();
     var window_top_position = $window.scrollTop();
     var window_bottom_position = (window_top_position + window_height);
   
     $.each($animation_elements, function() {
       var $element = $(this);
       var element_height = $element.outerHeight();
       var element_top_position = $element.offset().top;
       var element_bottom_position = (element_top_position + element_height);
   
       if ((element_bottom_position >= window_top_position) &&
         (element_top_position <= window_bottom_position)) {
         $element.addClass('in-view');
       } else {
         $element.removeClass('in-view');
       }
     });
   }
   $window.on('scroll', check_if_in_view);

   //INFORMATION

   var a = 0;
$(window).scroll(function() {

  var oTop = $('#information').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

})
   

});
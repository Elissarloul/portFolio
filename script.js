(function ($) {
    "use strict";
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.header').fadeIn('slow').css('display', 'flex');
        } else {
            $('.header').fadeOut('slow').css('display', 'none');
        }
    });
    
  })(jQuery);
  
  
  $(document).ready(function(){
  
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
      });
    
}); 
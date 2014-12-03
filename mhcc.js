(function ($) {
  Drupal.behaviors.mhcc2 = {
    attach: function (context, settings) {
      
		$('.responsive-nav-toggle').click(function(){
		  $('.art-hmenu').slideToggle();
		});

    }
  };
})(jQuery);
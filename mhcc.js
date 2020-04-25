(function ($) {
  Drupal.behaviors.mhcc2 = {
    attach: function (context, settings) {
      
		// $(".responsive-nav-toggle").off("click");	// Added to fix the annoying yoyo effect
		$(".responsive-nav-toggle").on("click", function(){
			$('.art-hmenu').slideToggle();
		});

		// After loading and resizing events..
		// $(window).off("resize load");
		$(window).on("resize load",function(){
			// Check if the window width is less than the specified value
			if ($(window).width() < 678) {
				// Make sure this element doesn't already exist
				if (!($(".menu-has-child").length)) {
					// Find all menu elements which has a submenu
					$(".region-navigation ul>li").has("ul")
					// Find their hyperlinks and insert this button after each one.
					.children('a').after('<button class="menu-has-child"> + </button>');
				} 

				// Add this class for mobile menu
				$(".art-nav").addClass('mobile-nav');
				$(".art-nav").removeClass('desktop-nav');

			} 
			// Else, if window is greater than specified value..
			else {
				// Remove the added buttons
				$('.menu-has-child').remove();
				// Add this class for desktop menu
				$(".art-nav").addClass('desktop-nav');
				$(".art-nav").removeClass('mobile-nav');
			}

			// $(".menu-has-child").off("click");	// Added to fix the annoying yoyo effect
			$(".menu-has-child").on("click", function(){
		            $(this).siblings('.menu').slideToggle();	// This expands/collapses the submenus upon clicking the button
		            $(this).text(function(i, text){
				        return text === "-" ? "+" : "-";		// This toggles the button text to "+" or "-"
				    });
		        }
		    );
		});

    }
  };
})(jQuery);
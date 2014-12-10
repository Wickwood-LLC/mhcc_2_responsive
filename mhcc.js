(function ($) {
  Drupal.behaviors.mhcc2 = {
    attach: function (context, settings) {
      
		$('.responsive-nav-toggle').click(function(){
			$('.art-hmenu').slideToggle();
		});

		//After loading and resizing events..
		$(window).off("resize load");
		$(window).on("resize load",function(){
			//Check if the window width is less than the specified value
			if ($(window).width() < 678) {
				//Make sure this element doesn't already exist
				if (!($(".menu-has-child").length)) {
					//Find all menu elements which has a submenu
					$(".region-navigation ul>li").has("ul")
					//Find their hyperlinks and insert this button after each one.
					.children('a').after('<button class="menu-has-child"> + </button>');
				} 
			} 
			//Else, if window is greater than specified value..
			else {
				//Remove the added buttons
				$('.menu-has-child').remove();
			}

			$(".menu-has-child").off("click");
			$(".menu-has-child").on("click", function(){
		            $(this).siblings('.menu').slideToggle();
		        }
		    );
		});

    }
  };
})(jQuery);
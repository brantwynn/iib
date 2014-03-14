(function ($) {
    Drupal.behaviors.iib = {
      attach : function (context, settings) {
        // Toolbar click handlers
        $('.iib-trigger', context).click(function() {
          if ($('.page-iib').hasClass('iib-active')) {
            $('.iib-trigger').removeClass('active');
            $('.page-iib', context).removeClass('iib-active');
          }
          else {
            $('.iib-trigger').addClass('active');
            $('.page-iib', context).addClass('iib-active');
          }
          return false;
        });
        // Force IIB to be active when displaying an error.
        if ($('.page-iib .error')[0]) {
          $('.iib-trigger').addClass('active');
          $('.page-iib', context).addClass('iib-active');
        }
        // Close IIB if other navbar items are in use.
        $('.icon:not(.iib-trigger)', context).click(function() {
          $('.iib-trigger').removeClass('active');
          $('.page-iib', context).removeClass('iib-active');
        });
      }
    };
})(jQuery);

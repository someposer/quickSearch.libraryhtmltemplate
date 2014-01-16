(function( $ ) {
  var $scrollTo = $.scrollTo = function( a, b, c ) {
    if (arguments.length == 1) { 
      // Jump to location
      if (typeof(a) == 'string') {
        return $(a).scrollTo( 1, 0 );
      } else {
        return $('html, body').animate({scrollTop: a}, 1);
      }
    } else if (arguments.length == 2) {
      // Animation to location over duration
      if (typeof(a) == 'string') {
        return $(a).scrollTo( b, 0 );
      } else {
        return $('html, body').animate({scrollTop: a}, b);
      }
    } else if (arguments.length == 3) {
      return $(a).scrollTo( b, c );
    }
  }
  
  $.fn.scrollTo = function( duration, offset ) {
    duration = typeof(duration) != 'undefined' ? duration : 1;
    offset = typeof(offset) != 'undefined' ? offset : 0;
    var offsetTop = this.offset().top + offset;
    $('html, body').animate({scrollTop: offsetTop}, duration);
  }
}( jQuery ));

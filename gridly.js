;(function(window, $) {

  $.fn.gridly = function gridly(options, selector) {
    options = options || {};
    selector = selector || ' > div';

    var els = $(this).find(selector).css('position', 'absolute')
      , cols = options.cols || 5
      , rows = Math.ceil(els.length / cols);

    var gutter = options.gutter || 20
      , sample = els.slice(0, 1)
      , sampleHeight = sample.outerHeight()
      , sampleWidth = sample.outerWidth();

    function position() {
      els.each(function() {
        var $this = $(this)
          , row = $this.data('row')
          , col = $this.data('col');

        $this
          .animate({
            'top': sampleHeight * col + col * gutter,
            'left': sampleWidth * row + row * gutter
          })
      });
    }

    function grid() {
      var c = 0;
      for(var i = 0; i < rows; i++ ) {
        for(var j = 0; j < cols; j ++) {
          var el = els[c];
          if(!el) break;
          $(el)
            .data('row', j)
            .data('col', i);
          c++;
        }
      }
    }

    function draw() {
      grid();
      position();
    }

    return {

      els: els,

      draw: draw

    }
  };

}(this, jQuery));
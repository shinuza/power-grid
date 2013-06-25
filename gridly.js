;(function(window, $) {

  $.fn.gridly = function gridly(options) {
    var divs = $(this).find(' > div');
    divs.css('position', 'absolute');

    var cols = options.cols;
    var rows = Math.ceil(divs.length / cols);

    var sample = divs.slice(0, 1);
    var sampleHeight = sample.outerHeight();
    var sampleWidth = sample.outerWidth();

    var c = 0;
    for(var i = 0; i < rows; i++ ) {
      for(var j = 0; j < cols; j ++) {
        var el = divs[c];
        if(!el) break;
        $(el).css({
          'top': sampleHeight * i + i * options.gutter,
          'left': sampleWidth * j + j * options.gutter
        });
        c++;
      }
    }
  };

}(this, jQuery));
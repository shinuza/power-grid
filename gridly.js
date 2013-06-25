;(function(window, $) {

  $.fn.gridly = function gridly(options) {
    var divs = $(this).find(' > div');
    divs.css('position', 'absolute');

    var cols = options.cols;
    var rows = Math.ceil(divs.length / cols);

    var sample = divs.slice(0, 1);
    var sampleHeight = sample.outerHeight();
    var sampleWidth = sample.outerWidth();

    function position() {
      divs.each(function() {
        var $this = $(this)
          , row = $this.data('row')
          , col = $this.data('col');

        $this
          .animate({
            'top': sampleHeight * col + col * options.gutter,
            'left': sampleWidth * row + row * options.gutter
          })
      });
    }

    function calculate() {
      var c = 0;
      for(var i = 0; i < rows; i++ ) {
        for(var j = 0; j < cols; j ++) {
          var el = divs[c];
          if(!el) break;
          $(el)
            .data('row', j)
            .data('col', i);
          c++;
        }
      }
    }

    function paint() {
      divs.each(function() {
        var rgb = Math.floor(Math.random() * 2);
        var color = Math.ceil(Math.random() * 255);
        var s = [];
        s[rgb] = color;

        for(var i = 0; i < 3; i++) {
          if(!s[i]) {
            s[i] = Math.ceil(Math.random() * 255);
          }
        }

        $(this).css('background', 'rgb( ' + s.join(',') + ' )');
      });
    }

    $('#sort-by-name').click(function() {
      Array.prototype.sort.call(divs, function(a, b) {
        var aName = $(a).data('name');
        var bName = $(b).data('name');

        if(aName > bName) return 1;
        if(aName == bName) return 0;
        if(aName < bName) return -1;
      });

      calculate();
      position();
    });

    $('#sort-by-id').click(function() {
      Array.prototype.sort.call(divs, function(a, b) {
        var aName = $(a).data('id');
        var bName = $(b).data('id');

        if(aName > bName) return 1;
        if(aName == bName) return 0;
        if(aName < bName) return -1;
      });

      calculate();
      position();
    });

    calculate();
    position();
    paint();
  };

}(this, jQuery));
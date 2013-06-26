;(function(window, $) {

  "use strict";

  var COLS = 5;
  var GUTTER = 20;
  var SELECTOR = '> div';
  var AUTO = true;

  $.fn.powerGrid = function powerGrid(options) {
    options = options || {};
    var selector = options.selector || SELECTOR;
    var auto = (options.auto === undefined) ? AUTO : options.auto;
    if(options.gutter === undefined) options.gutter = GUTTER;


    function PowerGrid(el) {
      var $el = $(el).css('position', 'relative');

      this.elements = $el.find(selector).css('position', 'absolute');
      this.cols = options.cols || COLS;
      this.rows = Math.ceil(this.elements.length / this.cols);

      var sample = this.elements.slice(0, 1);
      this.sampleHeight = sample.outerHeight();
      this.sampleWidth = sample.outerWidth();

      if(auto === true) {
        this.draw();
      }
    }

    PowerGrid.prototype = {

      'grid': function grid() {
        var c = 0;
        for(var i = 0; i < this.rows; ++i) {
          for(var j = 0; j < this.cols; ++j) {
            var el = this.elements[c];
            if(!el) break;
            $(el)
              .data('row', j)
              .data('col', i);
            ++c;
          }
        }
      },

      'position': function position() {
        var that = this
          , gutter = options.gutter;

          this.elements.each(function() {
            var $this = $(this)
              , row = $this.data('row')
              , col = $this.data('col');

            $this
              [options.animate === false ? 'css' : 'animate']({
              'top': that.sampleHeight * col + col * gutter,
              'left': that.sampleWidth * row + row * gutter
            })
          });
      },

      'draw': function draw() {
        this.grid();
        this.position();
      },

      'shuffle': function shuffle() {
        var o = this.elements;
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);

        if(auto === true) {
          this.draw();
        }

        return this;
      },

      'sort': function sort(fn) {
        Array.prototype.sort.call(this.elements, fn);

        if(auto === true) {
          this.draw();
        }

        return this;
      }
    };

    return new PowerGrid(this);
  };

}(this, jQuery));
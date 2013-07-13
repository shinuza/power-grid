;(function(window, $) {

  "use strict";

  var GUTTER = 20
    , SELECTOR = '> div';

  $.fn.powerGrid = function powerGrid(options) {
    options = options || {};

    var selector = options.selector || SELECTOR
      , auto = !!options.auto || true
      , gutter = options.gutter || GUTTER
      , resize = options.resize || true;


    function PowerGrid($el) {
      $el = $($el);
      this.elements = $el.find(selector).css('position', 'absolute');

      var self = this
        , len =  this.elements.length
        , sample = this.elements.slice(0, 1);

      this.sampleHeight = sample.outerHeight();
      this.sampleWidth = sample.outerWidth();
      this.cols = options.cols || this.computeCols();
      this.rows = Math.ceil(len / this.cols);

      $el.css({
        'position': 'relative',
        'height': this.rows * this.sampleHeight + this.rows * gutter
      });

      if(auto === true) {
        this.draw();
      }

      if(resize === true && !options.cols) {
        $(window).resize(function() {
          self.delayedResize();
        });
      }
    }

    PowerGrid.prototype = {

      timer: null,

      'computeCols': function computeCols() {
        return Math.floor($(window).outerWidth() / this.sampleWidth);
      },

      'grid': function grid() {
        var c = 0 , i = 0 , j , el;

        for(; i < this.rows; ++i) {
          for(j = 0; j < this.cols; ++j) {
            el = this.elements[c];
            if(!el) break;
            $(el)
              .data('row', j)
              .data('col', i);
            ++c;
          }
        }
      },

      'position': function position() {
        var that = this;

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

      'delayedResize': function delayedResize() {
        var self = this;

        clearTimeout(this.timer);
        this.timer = setTimeout(function() {
          self.cols = self.computeCols();
          self.draw();
        }, 200);
      },

      'draw': function draw() {
        this.grid();
        this.position();
      },

      'shuffle': function shuffle() {
        var o = this.elements, j, x, i = o.length;
        for(; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);

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
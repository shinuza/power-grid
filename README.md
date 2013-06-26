Power grid
==========

Power grid disposes elements on a virtual grid and provides function so manage them

##API

```js
var grid = $('#grid').powerGrid{ selector: '> div', cols: 5, gutter: 10 });
```

### PowerGrid(options)

  Initialize a grid with the given `options`.

  Valid options:

   - `selector` (String) Which elements to place on the grid - relative to the target element (defaults to `'> div'`)
   - `cols` (Number) number of columns on which to dispose the elements (defaults to `5`)
   - `gutter` (Number) space between each elements of the grid (defaults to `10`)

### PowerGrid#draw()

  Renders the grid, you must call this manually to have the grid rendered.

```js
var grid = $('#grid').powerGrid{cols: 10, gutter: 20 });
grid.draw();
```

### PowerGrid#shuffle()

  Shuffle the elements on the grid. You must call `PowerGrid#draw()` to re-draw.

### PowerGrid#sort(compareFunction)

  Sort the elements on the grid, uses `compareFunction(a, b)` to determine the sorting order.
  `compareFunction(a, b)` accepts two parameters which are the two elements your are comparing.

  Uses [native sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
  See the examples for more informations.

  You must call `PowerGrid#draw()` to re-draw.



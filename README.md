PowerGrid.js
============

PowerGrid.js disposes elements on a virtual grid and provides function so manage them

## Usage

```js
var grid = $('#grid').powerGrid{ selector: '> div', cols: 5, gutter: 10, auto: true, resize: false });
```

## API

### PowerGrid(options)

  Initialize a grid with the given `options`.

  Valid options:

   - `selector` (String) Selects elements to place on the grid - relative to the target element (defaults to `'> div'`)
   - `cols` (Number) Number of columns on which to dispose the elements (defaults to fullscreen width)
   - `gutter` (Number) Space between each elements of the grid (defaults to `10`)
   - `auto` (Boolean) Defines if you need to call `PowerGrid#draw()` manually (default to `true`)
   - `resize` (Boolean) Defines if resizing the window re-distribute the elements across the grid, deactivated if `cols` is defined (default to `true`)

### PowerGrid#draw()

  Renders the grid, you must call this manually to render the grid if `auto` is `false`.

```js
var grid = $('#grid').powerGrid{ auto: false });
grid.draw();
```

### PowerGrid#shuffle()

  Shuffle the elements on the grid. You must call `PowerGrid#draw()` to re-draw if `auto` is `false`.

### PowerGrid#sort(compareFunction)

  Sort the elements on the grid, uses `compareFunction(a, b)` to determine the sorting order.
  `compareFunction(a, b)` accepts two parameters which are the two elements your are comparing.

  Uses [native sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
  See the examples for more informations.

  You must call `PowerGrid#draw()` to re-draw if `auto` is `false`.

#License

MIT

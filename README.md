<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# scusum

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Calculate the cumulative sum of single-precision floating-point strided array elements.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-scusum
```

</section>

<section class="usage">

## Usage

```javascript
var scusum = require( '@stdlib/blas-ext-base-scusum' );
```

#### scusum( N, sum, x, strideX, y, strideY )

Computes the cumulative sum of single-precision floating-point strided array elements.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float32Array( x.length );

scusum( x.length, 0.0, x, 1, y, 1 );
// y => <Float32Array>[ 1.0, -1.0, 1.0 ]

x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
y = new Float32Array( x.length );

scusum( x.length, 10.0, x, 1, y, 1 );
// y => <Float32Array>[ 11.0, 9.0, 11.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **sum**: initial sum.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **y**: output [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to compute the cumulative sum of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var y = new Float32Array( x.length );

var N = floor( x.length / 2 );

var v = scusum( N, 0.0, x, 2, y, 1 );
// y => <Float32Array>[ 1.0, 3.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

// Initial arrays...
var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float32Array( x0.length );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = floor( x0.length / 2 );

scusum( N, 0.0, x1, -2, y1, 1 );
// y0 => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 4.0, 6.0, 4.0, 5.0 ]
```

#### scusum.ndarray( N, sum, x, strideX, offsetX, y, strideY, offsetY )

Computes the cumulative sum of single-precision floating-point strided array elements using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float32Array( x.length );

scusum.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
// y => <Float32Array>[ 1.0, -1.0, 1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, `offsetX` and `offsetY` parameters support indexing semantics based on a starting indices. For example, to calculate the cumulative sum of every other value in `x` starting from the second value and to store in the last `N` elements of `y` starting from the last element

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y = new Float32Array( x.length );

var N = floor( x.length / 2 );

scusum.ndarray( N, 0.0, x, 2, 1, y, -1, y.length-1 );
// y => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 5.0, 1.0, -1.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var Float32Array = require( '@stdlib/array-float32' );
var scusum = require( '@stdlib/blas-ext-base-scusum' );

var y;
var x;
var i;

x = new Float32Array( 10 );
y = new Float32Array( x.length );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( randu()*100.0 );
}
console.log( x );
console.log( y );

scusum( x.length, 0.0, x, 1, y, -1 );
console.log( y );
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-scusum.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-scusum

[test-image]: https://github.com/stdlib-js/blas-ext-base-scusum/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/blas-ext-base-scusum/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-scusum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-scusum?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-scusum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-scusum/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-scusum/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/stdlib

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->

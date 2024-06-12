<p align="center">
<img src="https://img.shields.io/github/languages/code-size/Niix-Dan/WdMath.svg"></a>
<a href="https://github.com/Niix-Dan/WdMath/graphs/contributors"><img src="https://img.shields.io/github/contributors/Niix-Dan/WdMath.svg"></a>
<a href="https://github.com/Niix-Dan/WdMath/stargazers"><img src="https://img.shields.io/github/stars/Niix-Dan/WdMath.svg?label=Stars&logo=github"></a>
</p>
---

# WdMath

WdMath is a JavaScript library providing a variety of mathematical functions, including operations on complex numbers, geometry calculations, and conversion utilities. This library is designed to be lightweight and easy to integrate into any JavaScript project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Complex Numbers](#complex-numbers)
  - [Geometry Calculations](#geometry-calculations)
  - [Conversion Utilities](#conversion-utilities)
- [Functions](#functions)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install WdMath, you can use npm or include the script directly in your project.

```sh
npm install wdmath
```

Or include in your HTML:

```html
<script src="path/to/wdmath.js"></script>
```

## Usage

### Complex Numbers

WdMath provides functions to work with complex numbers, including addition, subtraction, multiplication, and division.

Example:

```javascript
const complex1 = { real: 1, imag: 2 };
const complex2 = { real: 3, imag: 4 };

const sum = WdMath.addComplex(complex1, complex2);
console.log(sum); // { real: 4, imag: 6 }
```

### Geometry Calculations

Functions to calculate properties of various geometric shapes like cones, cylinders, prisms, pyramids, and spheres.

Example:

```javascript
const radius = 5;
const height = 10;

const volume = WdMath.cylinderVolume(radius, height);
console.log(volume); // 785.3981633974483
```

### Conversion Utilities

Convert between degrees and radians.

Example:

```javascript
const degrees = 180;
const radians = WdMath.toRadians(degrees);
console.log(radians); // 3.141592653589793
```

## Functions

### Array Operations

- `=> @param {number[]}`
- `array.mean(array)`: Calculates the mean of a array.
- `array.median(array)`: Calculates the median of a array.
- `array.mode(array)`: Calculates the mode of a array.
- `array.standardDeviation(array)`: Calculates the standard deviation of a array.

### Complex Numbers

- `=> @param {{real: number, imag: number}}`
- `complex.addComplex(complex1, complex2)`: Adds two complex numbers.
- `complex.subtractComplex(complex1, complex2)`: Subtracts two complex numbers.
- `complex.multiplyComplex(complex1, complex2)`: Multiplies two complex numbers.
- `complex.divideComplex(complex1, complex2)`: Divides two complex numbers.
- `complex.magnitudeComplex(complex)`: Calculates the magnitude of a complex number
- `complex.phaseComplex(complex)`: Calculates the phase of a complex number

### Geometry Examples

- `cone.Volume(radius, height)`: Calculates the volume of a cone.
- `cylinder.Volume(radius, height)`: Calculates the volume of a cylinder.
- `prism.Volume(baseArea, height)`: Calculates the volume of a prism.
- `pyramid.Volume(baseArea, height)`: Calculates the volume of a pyramid.
- `sphere.Volume(radius)`: Calculates the volume of a sphere.
- `rectangularPrism.Volume(length, width, height)`: Calculates the volume of a rectangular prism.

### Conversion

- `toRadians(degrees)`: Converts degrees to radians.
- `toDegrees(radians)`: Converts degrees to radians.

### Other

- `getBearing(startLat, startLng, endLat, endLng)`: Calculates the bearing between two points.
- `distInKm(lat1, lng1, lat2, lng2)`: Calculates the distance in kilometers between two points.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or additions.

## License

This project is licensed under the MIT License.

---
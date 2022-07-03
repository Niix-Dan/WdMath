module.exports = new class Pyramid {
    /**
     * Surface Area of a Pyramid (2bs+b²)
     * @param {number} base - Pyramid base length
     * @param {number} side - Pyramid one side length
     * @returns {number} Pyramid Area
     */
    SurfaceArea(base, side) {
        return 2 * base * side + Math.pow(base, 2);
    }
    /**
     * Volume of a Pyramid (1/3b²h)
     * @param {number} base - Pyramid base length
     * @param {number} height - Pyramid height
     * @returns {number} Pyramid Volume
     */
    Volume(base, height) {
        return (1 / 3) * Math.pow(base, 2) * height;
    }
}
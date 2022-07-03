module.exports = new class RetangularPrism {
    /**
     * Surface Area of a Retangular-Prism (2(wh+ld+lh))
     * @param {number} length - The RetangularPrism length
     * @param {number} height - The RetangularPrism height
     * @param {number} width - The RetangularPrism width
     * @returns {number} Retangular-Prism Area
     */
    SurfaceArea(length, height, width) {
        return 2 * (width * height) + 2 *(length * width) + 2 *(length * height)
    }
    /**
     * Volume of a Retangular-Prism (lhw)
     * @param {number} length - The RetangularPrism length
     * @param {number} height - The RetangularPrism height
     * @param {number} width - The RetangularPrism width
     * @returns {number} Retangular-Prism Volume
     */
    Volume(length, height, width) {
        return length * height * width;
    }
}
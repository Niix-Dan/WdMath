module.exports = new class Prism {
    /**
     * Surface Area of a Prism (bh+2ls+lb)
     * @param {number} base - The Prism base
     * @param {number} height - The Prism height
     * @param {number} length - The Prism length
     * @param {number} side - The prism side length
     * @returns {number} Prism Area
     */
    SurfaceArea(base, height, length, side) {
        return base * height + 2 * length * side + length * base;
    }

    /**
     * Volume of a prism (1/2(bh)l)
     * @param {number} base - The prism base
     * @param {number} height - The prism height
     * @param {number} length - The prism length
     * @returns {number} Prism Volume
     */
    Volume(base, height, length) {
        return (1 / 2) * (base * height) * length;
    }
}
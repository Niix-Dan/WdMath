module.exports = new class Sphere {
    /**
     * Surface Area of a sphere (4πr2)
     * @param {number} radius - The sphere radius
     * @returns {number} The sphere surface area
     */
    SurfaceArea(radius) {
        return 4 * Math.PI * Math.pow(radius, 2);
    }
    /**
     * Volume of a sphere (4/3 πr3)
     * @param {number} radius - The sphere radius
     * @returns {number} The sphere volume
     */
    Volume(radius) {
        return (4 / 3) * Math.PI * Math.pow(radius, 3);
    }
}


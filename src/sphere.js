module.exports = new class Sphere {
    /** 
     * Returns the volume and the surface area of the sphere.
     * @param {number} radius - Sphere radius
     * @returns {object}
     */
    constructor(radius) {
        this.volume = Volume(radius);
        this.surfacearea = this.SurfaceArea(radius);
    }
    
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


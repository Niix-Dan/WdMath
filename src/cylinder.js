module.exports = new class Cylinder {
    /** 
     * Returns the volume and the surface area of the cylinder.
     * @param {number} radius - Cylinder radius
     * @param {number} height - Cylinder height
     * @returns {object}
     */
    constructor(radius, height) {
        this.volume = Volume(radius, height);
        this.surfacearea = this.SurfaceArea(radius, height);
    }

    /**
     * Area of a cylinder
     * @param {number} radius - Cylinder radius
     * @param {number} height - Cylinder height
     * @returns {number} Cylinder Surface Area
     */
    SurfaceArea(radius, height) {
        return 2 * Math.PI * Math.pow(radius, 2) + 2 * Math.PI * radius * height;
    }

    /**
     * Volume of a cylinder
     * @param {number} radius - Cylinder radius
     * @param {number} height - Cylinder height
     * @returns {number} Cylinder Volume
     */
    Volume(radius, height) {
        return Math.PI * Math.pow(radius, 2) * height
    }
}
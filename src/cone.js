module.exports = new class Cone {
    /**
     * Returns the volume, base area, cone area, side length and surface area of the cone
     * @param {number} radius - The cone radius
     * @param {number} height - The cone height
     * @returns {object}
     */
    constructor(radius, height) {
        this.sidelength = this.SideLength(radius, height);
        this.volume = Volume(radius, height);
        this.basearea = this.BaseArea(radius);
        this.conearea = this.ConeArea(radius, this.sidelength);
        this.surfacearea = this.TotalSurfaceArea(radius, this.sidelength);
    }
    /**
     * Gets the cone base area
     * @param {number} radius The cone radius
     * @returns {number} The cone base area
     */
    BaseArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }
    /**
     * Gets the cone area
     * @param {number} radius - The cone radius
     * @param {number} sidelength - The cone side length
     * @returns {number} The cone area
     */
    ConeArea(radius, sidelength) {
        return Math.PI * radius * sidelength;
    }
    /**
     * Gets the cone surface area
     * @param {number} radius - The cone radius
     * @param {number} sidelength - The cone side length
     * @returns {number} The cone surface area
     */
    SurfaceArea(radius, sidelength) {
        return this.BaseArea(radius) + this.SideArea(radius, sidelength);
    }
    /**
     * Gets the cone side length
     * @param {number} radius - The cone radius
     * @param {number} height - The cone height 
     * @returns {number} The cone side length
     */
    SideLength(radius, height) {
        return Math.sqrt(radius*2, height*2)
    }
    /**
     * Gets the cone volume
     * @param {number} radius - The cone radius
     * @param {number} height - The cone height
     * @returns {number} The cone volume
     */
    Volume(radius, height) {
        return (1 / 3) * Math.PI * Math.pow(radius, 2) * height
    }
}
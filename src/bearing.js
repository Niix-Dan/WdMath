const { toRadians, toDegrees } = require("./modules.js");


/**
 * Gets the bearing between two coordinates
 * @param {number} startLat - Start latitude
 * @param {number} startLng - Start longitude
 * @param {number} destLat - Dest latitude
 * @param {number} destLng - Dest longitude
 */
module.exports = function(startLat, startLng, destLat, destLng) {
    startLat = toRadians(startLat);
    startLng = toRadians(startLng);
    destLat = toRadians(destLat);
    destLng = toRadians(destLng);

    let y = Math.sin(destLng - startLng) * Math.cos(destLat);
    let x = Math.cos(startLat) * Math.sin(destLat) -
        Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
    let brng = Math.atan2(y, x);
    brng = toDegrees(brng);
    return (brng + 360) % 360;
}
const { toRadians, toDegrees } = require("./modules.js");

/**
 * Get the distance between two coordinates in KM
 * @param {number} lat1 - Start latitude
 * @param {number} lon1 - Start longitude
 * @param {number} lat2 - Dest latitude
 * @param {number} lon2 - Dest longitude
 * @returns {number} the distance between the coordinates in KM
 */
module.exports = function(lat1, lon1, lat2, lon2) {
    var R = 6371;
    var dLat = toRadians(lat2-lat1);
    var dLon = toRadians(lon2-lon1); 
    var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
}

module.exports = new class Array {
    /**
     * Mean of an Array
     * @param {number[]} array The array of numbers
     * @returns {number} The mean of the array
     */
    mean = (array) => {
        return array.reduce((a, b) => a + b, 0) / array.length;
    }

    /**
     * Median of an Array
     * @param {number[]} array The array of numbers
     * @returns {number} The median of the array
     */
    median = (array) => {
        const sorted = array.slice().sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
    }

    /**
     * Mode of an Array
     * @param {number[]} array The array of numbers
     * @returns {number[]} The mode of the array
     */
    mode = (array) => {
        const frequency = {};
        array.forEach(value => frequency[value] = (frequency[value] || 0) + 1);
        const maxFreq = Math.max(...Object.values(frequency));
        return array.filter(value => frequency[value] === maxFreq);
    }

    /**
     * Standard Deviation of an Array
     * @param {number[]} array The array of numbers
     * @returns {number} The standard deviation of the array
     */
    standardDeviation = (array) => {
        const avg = mean(array);
        const squareDiffs = array.map(value => Math.pow(value - avg, 2));
        const avgSquareDiff = mean(squareDiffs);
        return Math.sqrt(avgSquareDiff);
    }

}


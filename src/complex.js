
module.exports = new class Complex {
    /**
     * Add Two Complex Numbers
     * @param {{real: number, imag: number}} a The first complex number
     * @param {{real: number, imag: number}} b The second complex number
     * @returns {{real: number, imag: number}} The sum of the two complex numbers
     */
    addComplex = (a, b) => {
        return { real: a.real + b.real, imag: a.imag + b.imag };
    }

    /**
     * Subtract Two Complex Numbers
     * @param {{real: number, imag: number}} a The first complex number
     * @param {{real: number, imag: number}} b The second complex number
     * @returns {{real: number, imag: number}} The difference of the two complex numbers
     */
    subtractComplex = (a, b) => {
        return { real: a.real - b.real, imag: a.imag - b.imag };
    }

    /**
     * Multiply Two Complex Numbers
     * @param {{real: number, imag: number}} a The first complex number
     * @param {{real: number, imag: number}} b The second complex number
     * @returns {{real: number, imag: number}} The product of the two complex numbers
     */
    multiplyComplex = (a, b) => {
        return {
            real: a.real * b.real - a.imag * b.imag,
            imag: a.real * b.imag + a.imag * b.real
        };
    }

    /**
     * Divide Two Complex Numbers
     * @param {{real: number, imag: number}} a The first complex number
     * @param {{real: number, imag: number}} b The second complex number
     * @returns {{real: number, imag: number}} The quotient of the two complex numbers
     */
    divideComplex = (a, b) => {
        const denominator = b.real * b.real + b.imag * b.imag;
        return {
            real: (a.real * b.real + a.imag * b.imag) / denominator,
            imag: (a.imag * b.real - a.real * b.imag) / denominator
        };
    }

    /**
     * Magnitude of a Complex Number
     * @param {{real: number, imag: number}} a The complex number
     * @returns {number} The magnitude of the complex number
     */
    magnitudeComplex = (a) => {
        return Math.sqrt(a.real * a.real + a.imag * a.imag);
    }

    /**
     * Phase of a Complex Number
     * @param {{real: number, imag: number}} a The complex number
     * @returns {number} The phase of the complex number
     */
    phaseComplex = (a) => {
        return Math.atan2(a.imag, a.real);
    }
}



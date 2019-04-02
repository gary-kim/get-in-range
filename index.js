/**
 * gets closest value to input in given range
 * @author: Gary Kim
 * @param {number} input
 * @param {number} min minimum value of range
 * @param {number} max maximum value of range
 * @returns {number} closest value to input in given range
 */
function getInRange(input, min, max)    {

    pinput = parseFloat(input);
    pmin = parseFloat(min);
    pmax = parseFloat(max);

    if( !pmin || !pmax || !pinput ) throw "given a arguumnt that is NaN";

    if(pmin > pmax) throw "provided minimum value is larger then maximum value";

    if(pinput <= pmin) return pmin;

    if(pinput >= pmax) return pmax;

    return pinput;

}

module.exports = getInRange;

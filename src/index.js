// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    const h = 50;
    const q = 25;
    const d = 10;
    const n = 5;
    const p = 1;

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency <= 0) {
        return {};
    }
    else {
        var result = {};
        var countH = Math.trunc(currency / h);
        if (!(countH === 0)) {
            result.H = countH;
        }
        currency = currency % h;
        var countQ = Math.trunc(currency / q);
        if (!(countQ === 0)) {
            result.Q = countQ;
        }
        currency = currency % q;
        var countD = Math.trunc(currency / d);
        if (!(countD === 0)) {
            result.D = countD;
        }
        currency = currency % d;
        var countN = Math.trunc(currency / n);
        if (!(countN === 0)) {
            result.N = countN;
        }
        currency = currency % n;
        var countP = Math.trunc(currency / p);
        if (!(countP === 0)) {
            result.P = countP
        }

        return result;
    }
};

function inTSE() {
    let tse = process.env.TSE;
    if (tse == 'TRUE') {
        return true;
    } else {
        return false;
    }
}

module.exports = { inTSE };
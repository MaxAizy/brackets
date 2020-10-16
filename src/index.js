module.exports = function check(str, bracketsConfig) {
    do {
        var strBefore = str;
        for (const [left, right] of bracketsConfig) {
            str = str.replace(`${left}${right}`, '');
        }
    } while (str !== strBefore)

    return !str;
}


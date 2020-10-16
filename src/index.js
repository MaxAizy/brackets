module.exports = function check(str, bracketsConfig) {
    do {
        var strBeforeReplacement = str;
        for (const [leftBracket, rightBracket] of bracketsConfig) {
            str = str.replace(`${left}${right}`, '');
        }
    } while (str !== strBeforeReplacement)

    return !str;
}


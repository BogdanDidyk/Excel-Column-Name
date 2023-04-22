function isAllUpperLatinCharacters(str) {
    return /^[A-Z]+$/.test(str);
}

function getExcelColumnNumberByName(columnName) {
    if (typeof columnName != "string" || !isAllUpperLatinCharacters(columnName)) return NaN;

    const len = columnName.length;
    let pow = 0;
    let result = 0;

    for (let index = len - 1; index >= 0; index--) {
        let code = columnName.charCodeAt(index) - 65 + 1;
        result += code * Math.pow(26, pow);
        pow++;
    }

    return result;
}
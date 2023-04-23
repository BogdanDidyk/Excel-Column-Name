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

function getExcelColumnNameByNumber(columnNumber) {
    if (!Number.isInteger(columnNumber) || columnNumber < 0) return "";

    let result = "";
    while (columnNumber > 0) {
        columnNumber--;
        let lastSymbolCode = columnNumber % 26;
        result = String.fromCharCode(lastSymbolCode + 65) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
}

console.log(getExcelColumnNumberByName("AA"));
console.log(getExcelColumnNumberByName("ABC"));
console.log(getExcelColumnNumberByName("JS"));
console.log(getExcelColumnNameByNumber(28));
console.log(getExcelColumnNameByNumber(100));
console.log(getExcelColumnNameByNumber(63270));
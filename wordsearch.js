//wordsearch.js

/* eslint-disable indent */
//transpose or diagonal (letters)
const modifyArray = function (matrix, modifier) {
    // Put your solution here
    const modifiedArray = [];
    let rowLength = matrix.length;
    let colLength = matrix[0].length;

    let modifiedArrayLength = 0;

    if (modifier === "transpose")
        modifiedArrayLength = rowLength;
    else if (modifier === "diagonal")
        modifiedArrayLength = rowLength + colLength - 1;

    for (let i = 0; i < modifiedArrayLength; i++) {
        modifiedArray.push([]);
    }

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            if (modifier === "transpose")
                modifiedArray[col].push(matrix[row][col]);
            else if (modifier === "diagonal")
                modifiedArray[col + row].push(matrix[row][col]);
        }
    }
    return modifiedArray;
};

const findWord = (letters, word) => {
    const joinChars = letters.map(ls => ls.join(''));
    for (let l of joinChars) {
        if (l.includes(word)) return true;
        if (l.split('').reverse().join('').includes(word)) return true;
    }
    return false;
};

const wordSearch = (letters, word) => {

    if (!Array.isArray(letters)) return undefined;

    if (letters.length === 0) return undefined;

    const horizontalJoin = findWord(letters, word);
    if (horizontalJoin) return true;

    const transposeLetters = modifyArray(letters, "transpose");

    const verticalJoin = findWord(transposeLetters, word);
    if (verticalJoin) return true;

    const diagnalLetters = modifyArray(letters, "diagonal");
    const diagnalJoin = findWord(diagnalLetters, word);
    if (diagnalJoin) return true;

    return false;
};

module.exports = wordSearch;
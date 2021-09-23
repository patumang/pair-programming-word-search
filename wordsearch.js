/* eslint-disable indent */
//transpose(letters)
const transpose = function (matrix) {
    // Put your solution here
    const transposeArray = [];

    for (let i = 0; i < matrix[0].length; i++) {
        transposeArray.push([]);
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            transposeArray[col].push(matrix[row][col]);
        }
    }
    return transposeArray;
};

/* const findWord = (letters, ) => {
    letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
}; */

/*
const wordSearch = (letters, word) => {

    if (!Array.isArray(letters)) return undefined;

    if (letters.length === 0) return undefined;
        
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    const transposeLetters = transpose(letters);

    const verticalJoin = transposeLetters.map(ls => ls.join(''));
    for (let l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    return false;

};
*/



const diagnalTranspose = function (matrix) {
    const transposeArray = [];
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    for (let i = 0; i < rowLength + colLength - 1; i++) {
        transposeArray.push([]);
    }

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            transposeArray[col + row].push(matrix[row][col]);
        }
    }

    return transposeArray;
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

    /*
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of joinChars) {
        if (l.includes(word)) return true;
        if (l.split('').reverse().join('').includes(word)) return true;
    }
    return false;
    */
    const transposeLetters = transpose(letters);

    const verticalJoin = findWord(transposeLetters, word);
    if (verticalJoin) return true;
    /*
    const verticalJoin = transposeLetters.map(ls => ls.join(''));
    for (let l of verticalJoin) {
        if (l.includes(word)) return true;
        if (l.split('').reverse().join('').includes(word)) return true;
    }
    */

    const diagnalLetters = diagnalTranspose(letters);
    const diagnalJoin = findWord(diagnalLetters, word);
    if (diagnalJoin) return true;
    /*
    const diagnalJoin = diagnalLetters.map(ls => ls.join(''));
    for (let l of diagnalJoin) {
        if (l.includes(word)) return true;
        if (l.split('').reverse().join('').includes(word)) return true;
    }
    */

    return false;
};


/* console.log(diagnalTranspose([
    [1, 2, 3, 4],
    [3, 5, 7, 9],
    [2, 4, 6, 8]
]));

console.log(diagnalTranspose([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
])); */
/*
[
    [1,2,3,4],
    [3,5,7,9],
    [2,4,6,8]   3 + 4 - 1 = 6 rows of dianally words
]
[
    [1],        1: [0, 0]  we push 1 to 0 + 0 th row of the new Array
    [2,3],      2: [0, 1] 3: [1, 0]     //1: [2, 3] we push 2 to 0 + 1 = 1th row of newArray
    [3,5,2],    3: [2,0] 5:[1,1] 2: [2,0]
    [4,7,4],
    [9,6],
    [8]         8: [2, 3] 2+3 =5
]



[
    [1,3,2],
    [2,5,4],
    [3,7,6],
    [4,9,8]
]
[
    [1]  1: [0,0]
    [3][2] 3: [0,1] 2:[1,0]
]

*/
module.exports = wordSearch;
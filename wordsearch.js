const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;

    for (row of letters) {
        if (!Array.isArray(row)) return false;
    }

    const newWord = word.toUpperCase();
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(newWord)) return true;
    }
    for (let i = 0; i < letters[0].length; i++) {
        let column = letters.map(element => element[i]);
        let columnJoined = column.join('');
        if (columnJoined.includes(newWord)) return true;
    }
    return false;
}

module.exports = wordSearch

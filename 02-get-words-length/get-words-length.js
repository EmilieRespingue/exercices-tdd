module.exports = function (someWords) {
    return someWords.map(function (word) {
        return word.length;
    });
};

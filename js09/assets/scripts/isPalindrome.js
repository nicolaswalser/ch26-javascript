const isPalindrome = (word) => {
  word = word.toLowerCase();
  let reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
};

module.exports = { isPalindrome };

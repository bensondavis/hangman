import randomWords from "random-words";

function getWord() {
  let word = randomWords();
  if (word.length <= 3) {
    while (word.length <= 3) {
      word = randomWords();
    }
  }
  return word;
}

function findInititalChar(word){
  return word[Math.floor(Math.random() * word.length)]
}

function encryptWord(word,pivotChar) {
  const arr = word.split("");
  return arr.map(char=>char===pivotChar?pivotChar:"_");
}

function revealLetter(encryptedArr, indexArr, letter) {
  for (let i = 0; i < indexArr.length; i++) {
    encryptedArr[indexArr[i]] = letter;
  }
  return encryptedArr;
}

function searchLetter(word, letter) {
  const arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) arr.push(i);
  }
  if (arr.length > 0) return arr;
  else return 0;
}

export { encryptWord, revealLetter, searchLetter, getWord, findInititalChar };

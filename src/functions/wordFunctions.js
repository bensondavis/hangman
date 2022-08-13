import randomWords from "random-words";

const word = randomWords();
// function getWord() {
//   let word = randomWords();
//   if(word.length <= 3) {
//     while
//   }
// }

function encryptWord(string) {
  const arr = string.split("");
  const wordLen = arr.length;
  const initial = [Math.floor(Math.random() * wordLen)];

  const res = searchLetter(arr, arr[initial]);
  if(res !== 0)
    initial.push(...res)

  for (let i = 0; i < arr.length; i++) {
    if (initial.indexOf(i) === -1) {
      arr[i] = "_";
    }
  }
  return arr;
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

export { word, encryptWord, revealLetter, searchLetter };

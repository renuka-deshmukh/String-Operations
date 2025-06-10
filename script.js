const inputString = document.querySelector('#inputPara')
const result1 = document.querySelector("#Result")

function countCharacters() {

  inputSTR = inputString.value
  console.log(inputSTR.length)
  result1.textContent = inputSTR.length;

}

function palindrome() {
  inputSTR = inputString.value

  let reversed = "";
  for (let i = inputSTR.length - 1; i >= 0; i--) {
    reversed += inputSTR[i];
  }
  if (inputSTR === reversed) {
    result1.textContent = "Palindrome";
  } else {
    result1.textContent = "Not Palindrome ";
  }

}

function countWords() {
  inputSTR = inputString.value

  const wordCount = inputSTR.split(' ').length

  result1.textContent = wordCount
}


function Vowels() {
  const allVowels = 'aeiouAEIOU'
  let count = 0;
  inputSTR = inputString.value

  for (let i = 0; i < inputSTR.length; i++) {
    if (allVowels.includes(inputSTR[i])) {
      count++;
    }
    result1.textContent = count
  }

}

function ExtractFirstWord() {
  inputSTR = inputString.value

  result1.textContent = inputSTR.charAt(0);
}

function ReplaceSpaces() {

  inputSTR = inputString.value

  const replaced = inputSTR.replaceAll(" ", "-")
  result1.textContent = replaced
}

function SplitString() {
  inputSTR = inputString.value

  const str = inputSTR.split
}

function ReverseString() {

  let reverse = "";
  inputSTR = inputString.value

  for (let i = inputSTR.length - 1; i >= 0; i--) {

    reverse += inputSTR[i];
  }
  result1.textContent = reverse
}










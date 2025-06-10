const inputString = document.querySelector('#inputPara')
const result1 = document.querySelector("#Result")

function countCharacters(){

    inputSTR = inputString.value
    console.log(inputSTR.length)
    result1.textContent = inputSTR.length;
    
}

function countWords(){
  inputSTR = inputString.value

  const wordCount = inputSTR.split(' ').length
   
  result1.textContent = wordCount
}


function Vowels(){
    const allVowels = 'aeiouAEIOU'
    let count = 0;
    inputSTR = inputString.value

    for(let i=0; i < inputSTR.length; i++){
      if( allVowels.includes(inputSTR[i])){
        count++;
      }
      result1.textContent = count
    }

}

function ExtractFirstWord(){
  inputSTR=inputString.value

  result1.textContent = inputSTR.charAt(0);
}
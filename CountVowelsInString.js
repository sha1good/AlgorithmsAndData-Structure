

//  function getVowelsCount(sentence){
//     return sentence.match(/[aeuoi]/gi) ? sentence.match(/[aeuoi]/gi).length : 0;
//  }



function getVowelsCount(sentence){
    let vowelCounts = 0;
    let vowelArray = 'aeiou'.split("");

     console.log(vowelArray)

    for(let character of sentence){
        if(vowelArray.includes(character.toLowerCase())){
            vowelCounts++;
        }
    }

     return vowelCounts;
}


 console.log(getVowelsCount("bcd xyz!")); // 0
 console.log(getVowelsCount("UI Engineer!")); 
 console.log(getVowelsCount("A hungry fox!")); 
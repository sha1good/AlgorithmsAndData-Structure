function groupAnagrams(words) {
  
 let anagrams = {};
 let sortedWord;

 for(let word  of words){
    console.log(word)
    sortedWord = word.split("").sort().join("")
    console.log(sortedWord)
    if(anagrams[sortedWord]) {
        anagrams[sortedWord].push(word)
       
         
     }else{
        anagrams[sortedWord] = [word]
     }
 }
 console.log((anagrams))
 console.log(Object.values(anagrams))
 console.log(Object.keys(anagrams))

 return Object.values(anagrams);
}


 const words = ["cinema", "iceman","iceman"]

 console.log(groupAnagrams(words))
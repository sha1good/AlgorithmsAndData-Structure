





 function StringArray(stringArray){
    
    let map = {}

    for(let  char  of stringArray){
        if(map[char]){
           map[char]++
        }else{
            map[char] = 1
        }
    }

     return Object.entries(map);
 }



 let string = "abbbccaghus"


  console.log(StringArray(string))
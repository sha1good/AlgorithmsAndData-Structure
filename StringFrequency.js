function stringFrequency(string){

    let map = {};
    
    let maxChar = [];
    

    for(let i= 0; i < string.length; i++){
        if(map[string[i]]){
           maxChar.push(string[i])
          
        }else{
           map[string[i]] = 1;
           maxChar.push(string[i])
          
        }
       
    }
    console.log(maxChar)
    return maxChar.join(".");
}



console.log(stringFrequency("abbbbbbbbccccccciiidd"))
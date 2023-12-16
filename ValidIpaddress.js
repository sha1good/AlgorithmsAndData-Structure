var restoreIpAddresses = function(s) {

    const result = [];
     solve(s,0,[], result)
     return  result;
}

const solve = (s, start, candidate, result) =>{
    if(candidate.length === 4){
        result.push(candidate.join("."))
         return;
    }

   

    let segment = "";
    for(let i = start; i < s.length; i++){
        console.log(i)
        segment +=s[i]
        console.log(segment)
        console.log("Hello")
    
        if(!isValidSegment(s,start,segment,candidate)){
         continue
        }

         candidate.push(segment);
         solve(s, i + 1, candidate, result)
         candidate.pop();
    }

   
 }


 const isValidSegment = (s,start,segment,candidate) =>{
    console.log(s, "string")
    console.log(segment, "segment")
    console.log(candidate,"candidate")
    
    if(Number(segment) > 255){
         return false;
    }

    if(segment > 1 && segment[0] === '0'){
        return false;
    }

    console.log(start)

    const remainingLenght = s.length - start;
    console.log("Printing remainLength")
    console.log(remainingLenght, "remain")
    console.log("===================")

    if( candidate.length === 3 && segment.length < remainingLenght){
           return false;
    }

  return true;
 }

 console.log(restoreIpAddresses("1921680"))




 let array = [1,9, 21]

  console.log(array.length)
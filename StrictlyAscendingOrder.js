function solution(a) { 
    if(a.length === 1) return true;
    let start = 0;
    let end = a.length - 1;
    let b = [];
    
    while(start <= end){
       if( start === end){
         b.push(a[start])
       }else{
          b.push(a[start], a[end])
       }
       
       start++;
       end--;
    }
 
    for(let i=1; i<b.length; i++){
        if(b[i-1] >= b[i])
            return false;
    }
    return true; 
}


a = [1, 3, 5, 6, 4, 2]
console.log(solution(a))
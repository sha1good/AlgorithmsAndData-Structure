
const check_duplicate_in_array=(input_array)=>{
    
    const duplicates =input_array.filter((item, index) =>input_array.indexOf(item) !== index);
    console.log(duplicates)
    return Array.from(new Set(duplicates));
}


const removeDuplicate = (array) =>{
    const uniqueSet = new Set(array)
    const uniqueArray = Array.from(uniqueSet);
      return  uniqueArray;
}

const arr=[1,1,2,2,3,3,4,5,6,1];
console.log(check_duplicate_in_array(arr));
 console.log(removeDuplicate(arr))




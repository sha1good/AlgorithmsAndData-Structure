//  array.reduce(callbackFunction(total,currrentValue, currentIndex, array), initialVal)
let num = [2,5,6,9,10]
let sum = num.reduce((total, currentValue) => total + currentValue, 0);
console.log(sum)


//Summing Values in an Object Array Using Array Reduce JavaScript

let obj = [{n: 5}, {n: 9}, {n: 13}, {n: 25}, {n: 40}];


let initialValue  = 0;

let sumTotal = obj.reduce((total, currentValue, currentIndex, obj) => total + currentValue.n, initialValue);

console.log(sumTotal);


//Flattening an Array of Arrays With Reduce Method

let mulArray = [[3, 5], [1, 7], [12, 9]];

let initialArray = [];

 let newArray = mulArray.reduce((total, currentValue) => total.concat(currentValue), initialArray);

 console.log(newArray);


 //Counting Instances in an Object Using Array Reduce in JavaScript

 let myCars = ['Mercedes-Benz', 'Jeep', 'Ferrari', 'Lamborghini', 'Mercedes-Benz', 'BMW', 'Ferrari'];


 let initialObject = [];


 let instances = myCars.reduce((allCars, car) => {
  
if(car in allCars){
    allCars[car]++;
}else{
    allCars[car] = 1;
}

 return allCars;

 } , initialObject);

 console.log(instances);

 //Removing Duplicates With Array Reduce

 let array = [2,2,2,2,2,3,3];

 let initialarray = [];

 let removeDuplicate = array.reduce((total, currentValue) => {
   
    if(total.indexOf(currentValue) === -1){
         total.push(currentValue);
    }

    return total; 
 }, initialarray);


   console.log(removeDuplicate);
function solution(n, r) {
    // test = [[512,2], [123,3], [987,4], [123,5]]
    const ratings = [
      [512, 2],
      [123, 3],
      [987, 4],
      [123, 5],
    ];
  
    const obj = {};
  
    ratings.forEach((rating) => {
       
      const id = rating[0];
      const ratingNum = rating[1];
  
      if (!obj[id]) {
        obj[id] = [ratingNum];
        
      } else {
        let newRatings = [...obj[id], ratingNum];
        
        obj[id] = [newRatings.reduce((a, b) => a + b, 0) / newRatings.length];
         
      }
    });


    console.log(obj)
 
  
    const higherRating = [];
    let currentRating = 0;
  
    for (const key of Object.keys(obj)) {
      if (obj[key][0] > currentRating) higherRating.push([key, obj[key][0]]);
      currentRating = obj[key][0];
    }
  
    let result = [];
  
    higherRating.forEach((rating) => {
      result.push(Number(rating[0]));
    });
  
    console.log(Math.min(...result));
    return Math.min(...result);
  }

   solution()
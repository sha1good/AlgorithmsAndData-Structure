function runLengthEncoding(string) {
    let count = 1;
    let output = "";

    string.split("").forEach((character, index) => {
        if(character === string[index + 1] && count < 9){
            count++;
        }else{
            output = `${output}${count}${character}`
            count  = 1;
        }
    })

      return output;
  }



  console.log(runLengthEncoding("AAAAAAAAAAAAAABBBBBCCCCDD"))
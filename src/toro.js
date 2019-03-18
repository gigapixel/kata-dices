export class Dices {

  /* n = number of dices
     m = face of dices
     score = total score of throw all dices

     return array ของผลลัพธ์คะแนน
  */
  dices_recursive(
    // Initial State
    totalDices, totalFace, score, 

    // State for execute recursive
    currentDices,
    parentFace, 
    sumTotal,

    // keep Result
    result,
    totalResult) {
          
    console.log('=> Enter Dices: ', currentDices, "sumTotal: ", sumTotal, " before result: ", result);

    //==Exit Condition =======================    
    const remainScore = score - sumTotal;
    

    if (currentDices >= totalDices) {      
      

      console.log("currentDices === totalDices, remain score: ", remainScore);
      
      if (remainScore > 0 && remainScore <= totalFace
        && remainScore >= parentFace)  {

        result.push(remainScore);
        totalResult.push(result);

        console.log("Exit with result: ", result);      
        console.log();
        return true;

      } else {        
        console.log("Exit with no result");
        console.log();
        return false;
      }                  
    }

    // // Exit Recursive
    // if (currentDices > totalDices) {  
    //   console.log();
    //   console.log('currentDices > totalDices');

    //   return true;
    // }
    
    
    console.log("remain score: ", remainScore);
    const availableFace = Math.floor(remainScore / (totalDices - currentDices + 1));
    const ceilingFace = Math.ceil(remainScore / (totalDices - currentDices + 1));
    console.log('parentFace: ', parentFace, ' availableFace: ', availableFace, ' ceiling: ', ceilingFace);
    if (parentFace > availableFace 
      || availableFace > totalFace 
      || availableFace < 1
      || ceilingFace > totalFace) {
      console.log();
      return false;
    }

    
    //======= Recursive Logic ===============
    // ค้นหาแต้มของ dices ถัดไป    
    for (let i = parentFace; i <= availableFace; i++) {
     
      const newResult = [...result, i];
      // result.push(i);
      console.log('add face: ', i, " current result: ", newResult);

      // deep next dices      
      
      const ret = this.dices_recursive(totalDices, totalFace, score, 
                                        currentDices+1, i, sumTotal + i, 
                                        newResult, totalResult);         
    }

    return true;
    
  }

  

  dices(score) {
    let n = 3;
    let face = 6;    
    let totalResult = [];

    // Dices #1, loop all faces    
    const availableFace = Math.floor(score / n);
    console.log("availableFace Dices #1: ", availableFace);
    for (let i=1; i <= availableFace; i++) {
      let resultItem = [i];
      console.log('Dices #1: ', resultItem)

      // recursive remaining Dices (#2..#n)
      const ret = this.dices_recursive(n, face, score,
                    2, i, i, resultItem, totalResult);
      
    }

    return totalResult;
  }

  showResult(resultList) {
    if (resultList.length === 0) {
      console.log("Impossible");
    }
    else {
      resultList.forEach((data, idx) => {
        const line = (idx+1) + '. ' + data.join(' + ');
        console.log(line);
      });
    }
  }
}


let d = new Dices();
d.showResult((d.dices(11)));


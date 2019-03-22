export class Dices {

  dices(score) {
    const feasibleSolution = [];
    const faces = [1,2,3,4,5,6];    

    // d1
    faces.map((d1_face) => {

      const upperBound = Math.ceil((score - d1_face) / 2);         
      const lowerBound = Math.max(d1_face, score - (d1_face + 6));

      let d2_faces = faces.slice(0, upperBound);
      d2_faces = d2_faces.slice(lowerBound - 1);      
            
      // check condition before enter loop D2
      upperBound >= 1 && upperBound <= 6 && 
      (
        d2_faces.map((d2_face) => {
          
          const d3_face = score - (d1_face + d2_face);

          // console.log('d1: ', d1_face, ' d2: ', d2_face, ' d3: ', d3_face);
          // keep result;
          const result = (d3_face < 1 || d3_face > 6 || d3_face < d2_face)  ? [] : [[d1_face, d2_face, d3_face]];
          feasibleSolution.push(...result);
        })
      )
    });    
    return feasibleSolution;
  }
  
}

const d = new Dices();
let res = d.dices(11);
console.log(res);
//3-18

let score = 15;

let nDic = 3;
let dic = [1,2,3,4,5,6];
let maxScore = 6;

let result = [];

while(score > 0) {
  if(score > 6) {
    result.push(6);
    score = score - 6;
    nDic--;
  } else{
    result.push(score - nDic + 1);
    score = score - (score - nDic + 1);
    nDic--;
    //console.log('score:' + score);
  }

}

console.log(result);

return;

for(i = 0; i < dic; i ++) {
  console.log(i);
  //result.push(arr[i]);
}



function alwaysReturn1() {
  return 1;
}

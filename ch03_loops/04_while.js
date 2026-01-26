// Java랑 똑같습니다.
/**
 * 1
 * 2
 * 3
 * 4
 * 5
 * 를 while문 사용해서 출력하시오.
 * [ 1, 2, 3, 4, 5 ] 를 출력하시오.
 */
let numList = [];
let count = 0;
while(count < 5){
  console.log((count+1));
  numList.push((count+1));
  count++;
}
console.log(numList);


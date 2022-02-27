
let number=0;

function yeild(...n) {
 
  for(let i of n){
    number+=i;
  }
  number=multiplyDigits(number);
  while(number>10)
      number=multiplyDigits(number);
  console.log(number);

}

function multiplyDigits(num){
  let sum=1;
  while(num>1){
      n=num%10;
      sum*=n;
      num=parseInt(num/10);

  }
  return sum;
}

yeild(997,2);



  














// function persistence(num) {
//   if (num.toString().length === 1) {
//     return 0;
//   }
//   var mult = 1;
//   var splitStr = num.toString().split("");
//   for (var i = 0; i < splitStr.length; i++) {
//     mult *= parseFloat(splitStr[i])
//   }
//   return 1 + persistence(parseFloat(mult));
// }

// console.log(
//   persistence(999),
//   persistence(39),
//   persistence(4)
// );


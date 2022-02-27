/*Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.*/
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



  
















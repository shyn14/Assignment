/*Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.*/
function check(arr){
    // let str='sad';
    let arr2=[];
  var regex=/\d/g;
  arr.forEach(function(element){
      if(regex.test(element))
         arr2.push(element);
  });
  console.log(arr2);



}
let arr=['155','shayan','hi i am neo','this is a demo123 ass'];
check(arr);

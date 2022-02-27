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
/* JavaScript ES6 an arrow function expression is a syntactically compact alternative to a regular function expression. Create a function that takes a string representing a function and converts between an arrow function and a regular function*/

function arrow(str) {
   
    console.log("Given--"+str);
    let n1=str.indexOf('(');
    let n2=str.indexOf(')');
    let n3=str.indexOf('function');
    let len="function".length;
    let string1=str.slice(0,n3).concat(str.slice(n3+len,n1)).concat("=").concat(str.slice(n1,n2+1)).concat("=>").concat(str.slice(str.indexOf('{')));
    console.log("Converted--"+string1);
    console.log("");


    
}
function replaceWithFunction(str){
      
    console.log("Given--"+str);
    let n1=str.indexOf('(');
    let n2=str.indexOf(')');
    let n3=str.indexOf('=>');
    let string1=('function ').concat(str.slice(0,n1-1)).concat(str.slice(n1,n2+1)).concat(str.slice(n3+2));
 console.log("Converted--"+string1);


}

arrow("variable function shayan(){ sfaasfasf}");

replaceWithFunction("shayan=(asdsad)=>{ }");


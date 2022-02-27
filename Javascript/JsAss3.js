/*Calculate loneOnes*/

function loneOnes(str){
let c=0;
for(let i=0;i<str.length;i++){
    if(str.charAt(i)=='1' && str.charAt(i+1)!='1'){
        c++;
    }

}
console.log("So the lone Ones are---",c);

    
}

loneOnes('02111010101');

let dep=1;
function depth(arg) {
 
    let c=0;
    for(let i in arg){
        if(typeof(arg[i])==='object'){
                dep+=1;
                depth(arg[i]); 
        } 
    }
    return dep;
}

dep=depth([1,2,3]);
console.log("Depth of array is--"+dep);
dep=depth([1,2,3,[2,[2]]]);
console.log("Depth of array is--"+dep);
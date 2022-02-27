
/*Boomerang*/
function boom(){
    let arr=[3,7,3,2,1,5,1,2,2,-2,2];
    let sol=[];
    var s=[];
    for(i=0;i<arr.length;i++)
    {   
        if(arr[i]==arr[i+2] && arr[i]!=arr[i+1])
        {
           s=Array.from([arr[i],arr[i+1],arr[i+2]]);
            sol.push(s);
                 
        }
    }
    console.log(sol);
}
boom();

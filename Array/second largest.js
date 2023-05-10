// find the second largest number from the array

const SecondLargest = (arr)=>{
    let l1 = 0
    let l2 = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i]>l1){
            l2=l1;
            l1=arr[i];
        }else if(arr[i]<l1&&arr[i]>l2){
            l2=arr[i];
        }
    }
    return l2
}

console.log(SecondLargest([1,2,547,45,58,3,7,58]));
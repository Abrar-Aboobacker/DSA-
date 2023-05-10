// find the k th largest number

const kthlargest =(arr,k)=>{
 arr.sort().reverse()
return arr[k-1]
}


console.log(kthlargest([1,2,5,4,6],3))
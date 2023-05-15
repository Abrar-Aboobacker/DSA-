function linearSearch(arr,n){
    for( let i=0;i<arr.length;i++){
        if(arr[i]==n){
            return i+1
        }else{
            return -1
        }
    }
}

console.log(linearSearch([1,4,2,5,7,8],44));

// O(n)
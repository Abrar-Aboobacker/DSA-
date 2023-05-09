// five a positive integer 'n' , determines if the number is power of 2 or not.

const isPowerOfTwo = (n)=>{
    if(n<2){
        return false
    }else{
        while(n>1){
            if(n%2 !== 0 ){
                return false
            }else{
                n = n/2
            }
        }
        return true
    }
}

console.log(isPowerOfTwo(2))
// give a natural number 'n' , determin if the number is prime or not.

const isPrime = (n) =>{
    if(n<2){
        return false
    }else{
        for (let i=2;i<n;i++){
            if(n%i===0){
                return false
            }else{

                return true
            }
        }
    }    
}
 console.log(isPrime(3))

 // big - 0 0(n)
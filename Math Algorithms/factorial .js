// give an integer 'n' find the factorial of that integer

const factorial = (num)=>{
    mul = 1
    if (num === 0){
        return 1
    }else{
        for(let i=1;i<=num;i++){
            mul = mul * i
        }
        return mul
    }
}
console.log(factorial(5));

// or 

const fact =(num)=>{
    let result= 1 
    for(let i=2 ; i<=num; i++){
        result = result * i 
    }
    return result
}

console.log(fact(0))
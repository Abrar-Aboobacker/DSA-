 // give a number 'n', find the first 'n' elements of the fibonacci sequence

 const fibonacci = (num)=>{
    const a=[0,1]
    for(let i=2;i<num;i++){
        a[i] = a[i-1]+a[i-2]
    }
    return a
 }

console.log(fibonacci(5));

// big - o = o(n)
function recursiveFibinocci(n){
    if(n<2){
        return n
    }

    return recursiveFibinocci(n-1)+recursiveFibinocci(n-2)
}

console.log(recursiveFibinocci(7));

// time Complexity O(2^n)
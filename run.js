function isPrime(){
    let n=10;
    let primes=[];

    nextPrime:
        for (let i = 2; i < n ;i++){
            for(let o = 2; o < i; o++){
                if(i % o == 0) continue nextPrime;
            }
            primes.push(i);
        }

    return primes
}

var result=isPrime();
console.log(result);



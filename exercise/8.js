showPrimes(10);

function showPrimes(limit) {
    for (let number = 1; number < limit; number++) {

        if (isPrime) console.log(number);
    }
}

function isPrime(number) {

    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            isPrime = false;
            false;
        }
    }
}
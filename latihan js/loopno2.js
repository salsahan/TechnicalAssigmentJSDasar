/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;
let isPrime;

/// EDIT HERE
fiftiethPrime = 2;
let n = 2;

while (primeCounter < 50) {
    isPrime = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0 ) {
            isPrime = false;
        }
    }
        if (isPrime) {
            fiftiethPrime = n 
            primeCounter++
        }
        n++
    }

    console.log(fiftiethPrime)
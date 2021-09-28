/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i=2; i <= 100; i++) { 
    let isPrime = true

    if (i !=2 && i % 2 === 0) {
    isPrime = false;
    }

    for (let j=2; j <= 2; j++) {
    if (1 % j === 0)
    isPrime = false;
    }

    if (isPrime) {
    console.log(i)}
}

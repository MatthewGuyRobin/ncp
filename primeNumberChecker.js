// let testNum = 131;

//let squareTestNum = find square root, apply Math.floor // 11

// function takeOutPrimes() = 

//for loop
// for ( i = 2; i <= squareTestNum; i++){
    // 1,2,3,4,5,6,7,8,9,10,11
    // take out primes of the list ie get rid of 4,6,8,9 takeOutPrimes
//     check if testNum % i == 0; // this is not prime if == 0
// }

// let squareTestNum = (Math.floor(Math.sqrt(testNum)));
// // console.log (squareTestNum);

// const takeOutPrimes = () => {
//     for ( i =2; i <= squareTestNum; i++){
//         if (testNum % i === 0){
//             return false;
//         }
//     }
// }
// const getPrimeNumbers = (20)  {
//     for ( let i = 2; i <= 20; i++){
//         if
//     }
// }

// const getPrimeNumbers = (21) {
//     for ( i = 2; i <= getPrimeNumbers; i++){
//         let isPrime = true;
//         for (i = 2 
//     }
// }

// for ( i = 0; i <= 21; i++)
// {
//     testP = 0;
//     for(testNum = 1; testNum <=21; testNum = testNum +1)
//     let testRes = i % testNum;
//     if(testRes === 0)
//     {
//         testP + 1;
//     }
// }
//     if (testP === 2)
//     {
//         console.log(i)
//     }

/////////////

// for ( i = 0; i <= 20; i = i + 1 ) {
//     prime = true;

//     for ( j = 2; j < i; j++ ) {
//         if ( i % j === 0 ) {
//             prime = false;
//         }
//     }
//     if ( prime ) {
//         console.log ( i )
//     }
// }

////////////

// const primeNumberChecker = () => {
//     if(num === 2){
//         return true;




// const num = (Math.floor(Math.sqrt(number)));

// for ( i = 2; i <= num; i++) {
//     if(number % i === 0){
//         return console.log(number + " is not a prime number")
//         }else{
//         return console.log(number + " is a prime number")
//     }
// }

// let nonPrimes = [];
// let primes = [];

// const checkPrime = (num) => {
//     let sqrNum = Math.floor(Math.sqrt(num));
//     for ( i = 2; i < sqrNum + 1; i++){
//         if (num % i == 0){
//             nonPrimes.push(num);
//             return false
//         }
//     }
// }
// for ( i = 1; i <= 20; i++){
//     if(checkPrime(i) != false){
//     primes.push(i)
//     }
// }



// console.log (`The prime numbers are ${primes}`);
// console.log (`The non-prime numbers are ${nonPrimes}`);

const checkPrime = (num) => {
    if (num == 2 || num == 3) {
        return true
    }
    if (num < 2 || num % 2 === 0) {
        return false
    }
    else 
        for (i = 3; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
        }
    } return true
}

console.log(checkPrime(7))
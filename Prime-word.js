/*
X and Y are playing a game. 
A list will be provided which contains n pairs of strings and integers. 
They have to add the integeri to the ASCII values of the stringi characters. 
Then they have to check if any of the new added numbers is prime or not. 

If for any character of the word the added number is prime 
then the word will be considered as prime word.

Can you help X and Y to find the prime words?

Example:
  prime_word({{"Emma",30},{"Liam",30}}) = {1,1};
    For the first word "Emma" ASCII values are: 69 109 109 97
    After adding 30 the values will be: 99 139 139 127
    As 139 is prime number so "Emma" is a Prime Word.
*/


// Solution

const isPrimeNumber = num => {
  for (let i = 2; i * i <= num; i++)
    if (num % i === 0)
      return false;
  return true;
};

const isPrimeWord = (word, add = 0) => 
  [...word].some(char => isPrimeNumber(char.charCodeAt(0) + add));

const primeWord = arr =>
  arr.map(([ name, add ]) => +isPrimeWord(name, add));

// or

function primeWord(arr){
  return arr.map(([str, value]) => 
              str.split("")
                 .map(e => e.charCodeAt(0))
                 .map(e => e + value)
                 .some(e => isPrime(e)))
            .map(Number);
}

function isPrime(n) {
  if (n <= 3) return n > 1;
  if ((n % 2 === 0) || (n % 3 === 0)) return false;
  for (let c = 5; c <= Math.sqrt(n); c += 6) {
    if (n % c === 0 || n % (c + 2) === 0) return false;
  }
  return true;
}
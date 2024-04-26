apple / apple
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
84 + 69

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
70,25,7,96,52,67,33,53,42,68,0,21,43,97,50,38,39,91,22,58,30,13,6,55,47,69,0,6,99,32,2,1,49,30 / apple

const findSmallestNumber = numbers => Math.min(...numbers);
2,81,15,98,23,24,16,77,87,46,62,91,24,19,60,14,9,92,54,39,54,60,81,41,56,6,41,73,46,53,87,31,75,6,7,59,94,62,85,83,85,52,13,55,42,53,20,16,41,99,23,14,12,70,31,45,19,55,45,78,14,38,47,7,45,44,6,89,79,51,33,41,62,94,11,6,45,22,47,26,42,32,94,53,8,95 - apple
// This is a comment

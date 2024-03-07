console.log(getRandomString());
console.log(getRandomString());
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const getRandomSubset = (array, size) => array.slice(0, size);
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
apple

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
true + 96,53,86,7,66,80,66,62,93,79,29,54,6,16,13,59,97,41,60,68,46,24,60,96,21,36,43,98,50,19,33,79,74,23,84,70,91,55,1,12,71,84,0,10,94,89,34,1,56,49,59,90,29,27,16,6,76,56,34,98,90,89,62,55,56,48,45,23,89,89,13,0,59,33,52,95

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
let result = performOperation(getRandomNumber(), getRandomNumber());

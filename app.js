// myAge variable holds my real age
let myAge = 27;
// earlyYears holds the value 2
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

// laterYears takes the result from subtracting 2 from myAge
let laterYears = myAge - 2;

// This calculates the number of dog years accounted for ny your later years
laterYears = laterYears * 4;

console.log(earlyYears);
console.log(laterYears);

// earlyYears and laterYears are added and the result is assigned to myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;

// myName holds my realname in lower caps
let myName = 'Edward'.toLowerCase();

//string interpolation is used to print out the sentence in line 23
console.log(`My name is ${myName}. I am ${myAge } years old in human years which is ${myAgeInDogYears } years old in dog years.`)
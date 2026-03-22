// ====================================
// JS to React - 30 Days
// Day 01 - Exercise: Variables & Loops
// ====================================
// Solve karo, phir concept.js se compare karo
// Har question ke neeche apna answer likho


// ====================================
// SECTION 1 - VARIABLES
// ====================================

// Q1.
// Apna naam, age aur city store karo
// Sahi variable type use karo — var/let/const

// your code here


// Q2.
// Ye code kya output dega aur kyun?

var x = 10;
var x = 20;
console.log(x);

// your answer (comment mein likho):


// Q3.
// Ye code error dega ya nahi? Kyun?

const pi = 3.14;
pi = 3.15;

// your answer (comment mein likho):


// Q4.
// Ye code kya output dega? Kyun unexpected hai?

console.log(score);
var score = 100;
console.log(score);

// your answer (comment mein likho):


// Q5.
// const ke saath object banao — name aur role ke saath
// Phir role ki value update karo
// Kya error aayega?

// your code here


// Q6.
// const ke saath ek array banao — 3 skills ke saath
// Ek naya skill push karo
// Phir poora array reassign karne ki koshish karo
// Dono mein kya hoga?

// your code here


// Q7.
// let aur const mein se sahi choose karo aur reason batao:
// a) User ka score jo game mein badhta rehta hai
// b) App ka base URL jo kabhi nahi badlega
// c) Loop counter
// d) Logged-in user ka naam jo logout pe reset hoga

// your answer (comment mein likho):


// ====================================
// SECTION 2 - LOOPS (FOR LOOP)
// ====================================

// Q8.
// 1 se 10 tak saare numbers print karo

// your code here


// Q9.
// 10 se 1 tak reverse order mein print karo

// your code here


// Q10.
// 1 se 100 ke beech saare even numbers print karo

// your code here


// Q11.
// 1 se 100 ke beech saare odd numbers print karo

// your code here


// Q12.
// Kisi bhi number ka multiplication table print karo (n x 1 to n x 10)

// your code here


// Q13.
// 1 se n tak saare numbers ka sum calculate karo

// your code here


// ====================================
// SECTION 3 - LOOPS (WHILE LOOP)
// ====================================

// Q14.
// while loop se 1 se 10 tak numbers print karo

// your code here


// Q15.
// ek number lo
// jab tak wo 50 se kam ho, har baar double karo
// start: 1
// har step ka value print karo

// your code here


// ====================================
// SECTION 4 - BREAK / CONTINUE
// ====================================

// Q16.
// 1 se 100 tak print karo
// jaise hi 17 se divisible number mile — loop band karo

// your code here


// Q17.
// 1 se 100 tak print karo
// jo numbers 5 se divisible hain unhe skip karo

// your code here


// Q18.
// ek array hai — ["HTML", "CSS", "JavaScript", "React", "Node"]
// forEach use karo
// sirf un topics ko print karo jinki length 4 se zyada ho

// your code here


// ====================================
// SECTION 5 - for...of vs for...in
// ====================================

// Q19.
// Ye dono loops kya output denge? Kyun alag hai?

const frameworks = ["React", "Vue", "Angular"];

for (const f of frameworks) {
  console.log(f);
}

for (const f in frameworks) {
  console.log(f);
}

// your answer (comment mein likho):


// Q20.
// Ek object banao — developer ki details ke saath
// for...in loop se saari keys aur values print karo

// your code here


// ====================================
// BONUS
// ====================================

// Q21.
// for loop se ye pattern print karo:
// *
// **
// ***
// ****
// *****

// your code here


// Q22.
// Ye code kya output dega? Fix karo expected output ke liye (0, 1, 2)

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// your answer (comment mein likho):
// fixed code:
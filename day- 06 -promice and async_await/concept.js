// ====================================
// JS to React - 30 Days
// Day 06 - Promises & Async/Await
// ====================================


// ====================================
// PART 1 - WHY PROMISES EXIST
// ====================================

// JavaScript ek single-threaded language hai
// Ek time pe ek hi kaam kar sakta hai
// But kuch cheezein time leti hain — API calls, file reads, timers

// Problem — without async:
// Agar JS har cheez ka wait kare — page freeze ho jaata hai

// Solution — Promises
// JS kehta hai: "Main kaam shuru kar deta hoon"
// "Jab ho jaaye — main tumhe bataunga"
// "Tab tak tum aur kaam karo"

// Simple analogy:
// Restaurant mein order diya — token mila
// Token = Promise
// Jab khana ready hoga — token pe aayega
// Tab tak tum baithke baat karo — wait mat karo counter pe


// ====================================
// PART 2 - WHAT IS A PROMISE
// ====================================

// Promise ek object hai jo future value represent karta hai
// 3 states hoti hain:
// pending   — kaam chal raha hai
// fulfilled — kaam ho gaya, value ready hai
// rejected  — kuch galat hua, error aaya

// Promise banana
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Kaam ho gaya!"); // fulfilled
  } else {
    reject("Kuch galat hua!"); // rejected
  }
});

console.log(myPromise); // Promise { 'Kaam ho gaya!' }

// Real example — simulating API call
const fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = { id: 1, name: "Shivesh", role: "Frontend Dev" };
    resolve(user); // after 2 seconds — success
  }, 2000);
});


// ====================================
// PART 3 - .then() .catch() .finally()
// ====================================

// .then()    — runs when Promise resolves (success)
// .catch()   — runs when Promise rejects (error)
// .finally() — runs always — success ya failure dono ke baad

fetchUser
  .then(user => {
    console.log("User mila:", user.name); // "User mila: Shivesh"
    return user.role; // next .then ko pass hoga
  })
  .then(role => {
    console.log("Role:", role); // "Role: Frontend Dev"
  })
  .catch(error => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Done — success ya failure dono ke baad"); // always runs
  });

// Real world — fetch API
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())  // response ko JSON mein convert karo
  .then(data => console.log(data))    // actual data
  .catch(error => console.log(error)) // network error etc
  .finally(() => console.log("Request complete"));


// ====================================
// PART 4 - CALLBACK HELL (WHY PROMISES ARE BETTER)
// ====================================

// Pehle callbacks use hote the — nested functions
// Ye "Callback Hell" ya "Pyramid of Doom" kehte hain

// Callback hell — ugly, unreadable
getUser(userId, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      getLikes(comments[0].id, function(likes) {
        console.log(likes); // 4 levels deep — nightmare
      });
    });
  });
});

// Same thing with Promises — flat, readable
getUser(userId)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => getLikes(comments[0].id))
  .then(likes => console.log(likes))
  .catch(error => console.log(error));


// ====================================
// PART 5 - ASYNC/AWAIT
// ====================================

// async/await = Promises ka cleaner syntax
// Andar se Promise hi hai — bas looks like normal code

// async keyword — function ko async banata hai
// await keyword — Promise resolve hone ka wait karta hai

// With .then() chaining
function getUserWithThen() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

// Same thing with async/await — cleaner
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Request complete");
  }
}

getUser();

// await can only be used inside async function
// const data = await fetch("..."); // SyntaxError outside async


// ====================================
// PART 6 - PROMISE METHODS
// ====================================

const p1 = Promise.resolve("First");
const p2 = Promise.resolve("Second");
const p3 = Promise.resolve("Third");

// Promise.all — sabka wait karo, sab resolve ho toh result
Promise.all([p1, p2, p3])
  .then(results => console.log(results));
  // ["First", "Second", "Third"]
  // Agar koi bhi reject ho — sab fail

// Promise.allSettled — sab ka wait karo — success ya failure
Promise.allSettled([p1, Promise.reject("Error"), p3])
  .then(results => console.log(results));
  // [{status: "fulfilled"}, {status: "rejected"}, {status: "fulfilled"}]

// Promise.race — pehla resolve/reject hone wala win karta hai
Promise.race([p1, p2, p3])
  .then(result => console.log(result)); // "First"

// Promise.any — pehla SUCCESSFULLY resolve hone wala
Promise.any([Promise.reject("err1"), p2, p3])
  .then(result => console.log(result)); // "Second"


// ====================================
// PART 7 - REACT CONNECTION
// ====================================

// React mein data fetching ke liye async/await use hota hai

// useEffect mein API call
// useEffect(() => {
//   async function fetchData() {
//     try {
//       const response = await fetch("/api/users");
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }
//
//   fetchData();
// }, []);

// Note: useEffect callback directly async nahi ho sakta
// Isliye andar ek alag async function banate hain

// Common pattern:
// loading state — data aa raha hai
// error state   — kuch galat hua
// data state    — successfully mila

// Ye React mein sabse common pattern hai
// Samajhna zaroori hai before starting React
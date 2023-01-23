
let user = new Object();  //object constructor syntax

//let vehicle = {};    // object literal syntax
 

function User(name,age,job){
    this.name = name,
    this.age = age,
    this.job = job;
}

var user1 = new User("prijith","25","developer");

user.name = "prijil";
user.age = "22";
user.job = "engineer";


console.log(user1);
console.log(user);

// ACCESS OBJECT PROERTIES - values

console.log(user1["name"]);
console.log(user.name);

// access object keys

console.log(Object.keys(user,user1));

// converting an object to arrays of key/value pairs

console.log(Object.entries(user1));

// merging object with spread operator    note - return new object

const modifiedUser = {
    ...user1,
    salary :"50000"
};
console.log(modifiedUser);

// combine a object

const combinedUser = Object.assign(user,modifiedUser);
console.log(combinedUser);

// feeezing an object - can't add new properties and values
Object.freeze(user1);
user1.name = "changed name";
console.log(user1);

// sealing an object - can't add new properties but can edit/change existing properties
Object.seal(user);
user.name ="changed name";
user.place = "thrissur";
console.log(user);

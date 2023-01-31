class Student {
  name;
  job;
  dob;
  constructor(name,job,dob){
    this.name = name;
    this.job = job;
    this.dob = dob;
  }
  getAge() {
    console.log(this.dob);
    return new Date().getFullYear() - this.dob;
  }
  getName(){
    return this.name;
  }
  static minimun = function minimun(...args){
    var array = args.map((val) => val.dob);
    console.log(Math.min(...array));
};
}
// note if we create a function inside class it wiil depend only single object

let student1 = new Student("prijith","developer",1997);  // if we create object like this here we are giving value to constuctor of the class.
let student2 = new Student("jithu","developer",2000);
let student3 = new Student("preethy","teacher",1976);

console.log(student3.getAge());


// static functions - for multiple object logic in a class static function is used
Student.minimun(student1,student2,student3);

// getter and setter

class Vehicle {
    name;
    price;
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    increasePrice(price){
       return this.price = this.price + price;
    }
    set decreasePrice(price){
         this.price = this.price - price;
    }
    get offerPrice(){
        return this.price - 1.15;
    }
}

let vehicle1 = new Vehicle("benz",120000);
console.log(vehicle1);
console.log(vehicle1.increasePrice(15179));  // normal case we want to call the function to change the price
vehicle1.decreasePrice = 100000; // because of using set before function if we directly assign value the function will call
console.log(vehicle1);

console.log(vehicle1.offerPrice); // get - no function call needed but it is a function


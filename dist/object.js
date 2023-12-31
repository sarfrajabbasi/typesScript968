"use strict";
let car;
car = {
    make: "toyota",
    model: "yella",
    year: 2001,
};
console.log(car);
// create function to print values of this type to the console.
/**
 * Print information about a car to the console
 * @param car - the car to print
 */
function printCar(car) {
    let str = `${car.make} ${car.model} (${car.year})`;
    if (typeof car.chargeVoltage !== "undefined") {
        str += `// ${car.chargeVoltage}v`;
    }
    console.log(str);
}
let myCar = {
    make: "toyota",
    model: "yella",
    year: 2002,
    chargeVoltage: 240,
    color: "red",
};
console.log(myCar.color);
printCar(myCar);
// index signatures:---
let phone = {
    home: { country: "+1", area: "211", number: "652-4515" },
    work: { country: "+1", area: "670", number: "752-5856" },
    fax: { country: "+1", area: "322", number: "525-4357" },
};
let phones = {};
phones.fax;
//  Arrays and tuples:---
const fileExtensions = ["js", "ts"];
// declare an array of numbers
let numbers = [1, 2, 3, 4, 1, 6];
// declare an array of booleans
let flags = [true, false, true];
let people = [
    { name: "Jhon", age: 25 },
    { name: "Tina", age: 15 },
    { name: "Addy", age: 23 },
];
let numbers1 = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange", "grapes"];
const cars = [
    {
        make: "toyota",
        model: "UNV-234",
        year: 2002
    },
];
// Tuples:---
// Declaring a Tuple
let person = ["Sarfraj", 23, true];
// Accessing elements of a tuple
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
// limitations:--
person.pop();
person.pop();
person.push(1);
person.push("str");
person.push(true);
console.log(person);

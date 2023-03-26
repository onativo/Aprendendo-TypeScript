"use strict";
//readonly property
// class Movies {
//   //readonly id: number
//   // name: string
//   constructor(
//     public readonly id:number, 
//     public name:string,
//     private _year:number){
//     //this.id = id
//     //this.name = name
//   }
// }
// let movie1 = new Movies(1, 'este filme', 2006)
// console.log(movie1)
//Index signatures
// class HotelRoom{
//   [roomNumber: string]: string
// }
// let room = new HotelRoom()
// room.A201 = 'vini'
// room.A101 = 'vinnny'
// room.A302 = 'vinicios'
// console.log(room)
//Inheritance and override
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get greet() {
        return this.firstName + ' ' + this.lastName;
    }
}
//cliente do banco
class Client extends Person {
    get greet() {
        return 'Dear ' + super.greet;
    }
}
//funcionario do banco
class Staff extends Person {
    get greet() {
        return 'Hi ' + super.greet;
    }
}
let cliente1 = new Client('vini', 'nativo', 29);
let staff1 = new Staff('ana', 'maria', 21);
console.log(cliente1.greet);
console.log(staff1.greet);

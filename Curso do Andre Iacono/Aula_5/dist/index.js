"use strict";
// class User {
//   private name: string
//   private balance:number = 0
//   //singleTransaction:number = 0
//   //static totalTransaction: number = 0
//   constructor(n:string, b:number){
//   this.name = n
//   this.balance = b
//   }
//   deposit(amount:number){
//   this.balance += amount
//   }
//   spend(amount:number){
//   this.balance -= amount
//   }
// }
// const user1 = new User('vini', 90)
// user1.deposit(30)
// const user2 = new User('jonas', 88)
// user2.spend(38)
// console.log(user1)
// console.log(user2)
//Interfaces
// interface Item{
//   name: string
//   price:number
//   newItem(message:string): void
// }
// let prod1: Item
// prod1 = {
//   name: 'bananas',
//   price: 50,
//   newItem(message: string){
//     console.log(message + this.name)
//   }
// }
// prod1.newItem('Você comprou ')
//Exercício 1
// interface CartItem{
//   id:number
//   title:string
//   variantID?:number
// }
// function addToCart(item: CartItem){
//   console.log(`Adicionamos ${item.title} ao carrinho`)
// }
// addToCart({id: 1, title: 'sapatos'})
// Exercício 2
// interface newPerson{
//   name: string
//   age: number
// }
// class Person implements newPerson{
//   constructor(
//     public name: string,
//     public age: number){}
// }
// const jane = new Person('Jane', 30)
// console.log(`${jane.name} tem ${jane.age} anos de idade`)
//Exercício 3
class MC {
    greet(event = 'party') {
        return `welcome to the ${event}`;
    }
}
const mc = new MC();
console.log(mc.greet('show'));

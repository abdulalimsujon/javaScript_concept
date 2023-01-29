
// make a building function

// function Person(name, age) {

//     this.name = name,
//         this.age = age
// }

// Object.prototype.sujon = function () {
//     console.log('abdul alim sujon')
// }

// var p = {}

// p.sujon()


//=====================>

// prototype base class

//=====================>


// function Person(name, age) { // parent class 

//     this.name = name,
//         this.age = age

// }

// Person.prototype = {
//     eat: function () {
//         console.log(`${this.name} is eating`)
//     }
// }

// function Cricketer(name, age, type, country) { // sub class 
//     Person.call(this)

//     this.name = name
//     this.age = age

//     this.type = type,
//         this.country = country
// }


// Cricketer.prototype = Object.create(Person.prototype)

// Cricketer.prototype.constructor = Cricketer;
// Cricketer.prototype.play = function () {
//     console.log(`${this.name} is playing`)
// }

// let shakib = new Cricketer('shakib', 35, 'all rounder', 'bangledesh')

// console.log(shakib.eat())
// console.log(shakib.play())

//============================================>
//class base 
//============================================>

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        console.log(`${this.name} is eating`)
    }
}



class Cricketer extends Person {
    constructor(name, age, type, country) {
        super(name, age)
        this.name = name
        this.age = age
        this.type = type
        this.country = country

    }

    play() {
        console.log(`${this.name} is playing`)
    }
}

let shakib = new Cricketer('shakib', 35, 'all rounder', 'bangledesh')
shakib.eat()
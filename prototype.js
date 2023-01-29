
function Person(name, age) {
    let person = Object.create(Person.prototype)
    person.name = name,
        person.age = age

    return person
}

Person.prototype = {
    play() {
        console.log('i am playing')
    },
    eat() {
        console.log('i am eating')
    }
}
const shakib = Person('shakib', 35)
shakib.play()




// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     play() {
//         console.log('i am playing')
//     }
//     eat() {
//         console.log('i am eating')
//     }
// }


// const rahim = new Person('rahim', 35)

// rahim.play()
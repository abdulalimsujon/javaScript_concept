

//implicit binding

// var shakib = {
//     name: "shakib",
//     age: 35,
//     printPlayerName: function () {
//         console.log(this.name)
//     }
// }

// shakib.printPlayerName()




// function printPlayerFunction(obj) {
//     obj.printPlayerName = function () {
//         console.log(this.name)
//     }
// }


// const masrafe = {
//     name: "mashrafe",
//     age: 35

// }
// const tamim = {
//     name: "tamim",
//     age: 30

// }

// printPlayerFunction(tamim)

// tamim.printPlayerName()


// var Person = function (name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function () {
//             console.log(this.name)
//         },
//         fatherName: {
//             name: "Mr rahman",
//             printName: function () {
//                 console.log(this.name)

//             }

//         }
//     }
// }

// var shakib = Person("shakib", 35)

// shakib.fatherName.printName()



//explicit binding

// const printName = function (v1, v2) {
//     console.log(this.name)
//     console.log(v1)
//     console.log(v2)

// }

// const shakib = {
//     name: "shakib",
//     age: 30
// }

// const v1 = 'good player'
// const v2 = "handsome"
// const v = [v1, v2]


// const myfunc = printName.bind(shakib, v1, v2)

// myfunc()

//if we call one value than it is call

//then if we pass array then it will be apply

// if we dont want to use array to pass then use bind to pass several parameter


// new binding

// function Person(name, age) {
//     this.name = name,
//         this.age = age

//     console.log(`my name is ${this.name} age is ${this.age}`)

// }

// const sujon = new Person('sujon', 25)



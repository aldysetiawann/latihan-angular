// //deklarasi function
// const sayHello = function(){
//     const number = Math.floor(Math.random() * 10)
//     console.log("hello ultramen", number)
// }

// const sayHelloWithName = function(name) {
//     const number = Math.floor(Math.random() * 10)
//     console.log("hello", + name + "!", number)
// }

// const sayHelloWithNameAndNumber = function(name, number = 0 ){
//     console.log("hello" + name + "!", number)
// }

// const sayHelloWithNameAndDefaultNumber = function(name, number = 0){
//     console.log("hello" + name + "!", number)
// }

// //pangggil function
// sayHello()
// sayHelloWithName()
// sayHelloWithNameAndNumber()
// sayHelloWithNameAndDefaultNumber()
const sayHello = function() {
    const number = Math.floor(Math.random()*10)
    console.log("hello ultraman!", number)
}

function attack(number){
    console.log("defanse ultraman", number)
}

const defense = () => console.log("defanse ultraman!")

const defenseAgain = () => console.log("defense ultraman!")

const defenseAndAttack = (defenseFn, attackFn) => {
    if (!attackFn){
        attackFn =  () => {}
    }
    defenseFn()
    attackFn()
}

defenseAndAttack(defense, attack)
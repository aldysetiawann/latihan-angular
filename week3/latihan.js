//LATIHAN IF ELSE

const status = "1"
if (status == "login"){
  console.log("hello")
} else if (status == "idle"){
  console.log("idle nih")
}
else {
  console.log("login dulu")
}
console.log("end")

//LATIHAN LAGI

const state = "ultramen";
const name = "moster"

// (state === 1) ?
// console.log("Benar") :
// (state === 2) ? console.log("Salah") : console.log("login dlu")

switch(state) {
    case 1:
        console.log("1")
        break
    case 2:
        console.log("2")
        break
    case name:
        console.log("ultraaa")
        break
    default:
        console.log("2")
}


// LOOPING
const heros = ["Banana", "Supermen", "Angkasa", "Leon", "JR"]
for(let index = 0; index <= heros.length; index++){
    console.log(index, heros[index])
}

let index = 0
while(index < heros.length){
    console.log(index, heros[index])
    index++
}

while(true) {
    //random dari 0-9
    const number = Math.floor(Math.random() * 10)
    if (number === 8) {
        console.log(number)
        break
    }
    console.log
}

for( index in heros) {
    console.log(heros[index])
}

for( value of heros) {
    console.log("value")
}

//LATIHAN ALL

const heros = ["Banana", "Supermen", "Angkasa", "Leon", "JR"]
// for(let index = 0; index <= heros.length; index++){
//     console.log(index, heros[index])
// }

// let index = 0
// while(index < heros.length){
//     console.log(index, heros[index])
//     index++
// }

// let index = 9
// do {
//     console.log("Spacium Ray Bem!")
// } while(index < 9)

// while(index < 9){
//     console.log("Spacium Ray")
// }

// while(true) {
//     //random dari 0-9
//     const number = Math.floor(Math.random() * 10)
//     if (number === 8) {
//         console.log(number)
//         break
//     }
//     console.log
// }

// for( index in heros) {
//     console.log(heros[index])
// }

// for( value of heros) {
//     console.log("value")
// }

// let success = false
// let count = 0
// do {
//     success = insertToDatabase()
// } while(success != false && count <3)

const magicNumber= 5
let number
do {
    number = prompt("masukkan")
    if(number == magicNumber){
        console.log("jawabanmu benar")
    }
    }while (number != magicNumber)

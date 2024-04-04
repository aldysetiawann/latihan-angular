const ultraman = {
    name: "cosmos",
    height: 100,
    weight: 55,
    isDead: false,
    address: {
        planet:"koboy",
        galaxy:"bima sakti"
    },
    weapons: ["sword", "shield", "lasso"],
    attack: () =>{
        console.log("sword attack!")
    },
    beam: (number) => console.log("spacium ray beam" + number + "%")
}

ultraman.attack()
ultraman.beam(80)

// // console.log(ultraman.name, ultraman.height)
// // console.log(ultraman["name"], ultraman["height"])

// const prop = "height"
// console.log(ultraman[prop])

// ultraman.name ="dyna"
// ultraman["height"] = 99
// console.log(ultraman.address)

// const hero = {...ultraman}
// hero.color = "red"
// console.log(hero)

// console.log(ultraman)
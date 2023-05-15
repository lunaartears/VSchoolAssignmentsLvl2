let name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])



const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))


const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person) => {
        return person.friendly
    })
}
console.log(filterForFriendly(people))


const doMathSum = (a, b) => {
    return a + b
}

const produceProduct = (a, b) => {
    return a * b
}
console.log(doMathSum(2, 4))
console.log(produceProduct(2, 6))


//Hi Kat Stark, how does it feel to be 40?
let person = {
    fName: "Sarah",
    lName: "Dawn",
    age: 42
}

let printString = (obj) => {
    return "Hi " + person.fName + " " + person.lName + " , how does it feel to be " + person.age
}
console.log(printString(person))

let printString2 = (fName, lName, age) => {
    return "Hi " + fName + " " + lName + ", how does it feel to be " + age
}
console.log(printString2("Sarah", "Dawn", 42))


//Hi Janice!
//Welcome to Hawaii.
//I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.


let printWelcome = (obj) => {
    return `Hi ${obj.name}!
    Welcome to ${obj.location}.
    I hope you enjoy your stay. Tell the pres of ${obj.location} hello.`
}

console.log(printWelcome(obj = {
    name: "Janice",
    location: "Hawaii",
}))

let printObj2 = (name, location) => {
    return `Hi ${name}!
    Welcome to ${location}.
    I hope you enjoy your stay. Tell the pres of ${location} hello.`
}
console.log(printObj2("Sarah", "Hawaii"))

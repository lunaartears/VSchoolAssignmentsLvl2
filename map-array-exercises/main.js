let nums = [2, 4, 6, 8, 10, 12];

let doubled = nums.map(function(num) {
    return num * 2
})
console.log(doubled);

let stringified = nums.map(function(num) {
    return num.toString()
})
console.log(stringified)


let names = ["leah", "winTer", "TED"];

let capitalized = names.map(function(name) {
    let firstPart = name[0].toUpperCase()
    let secondPart = name.slice(1).toLowerCase()
    return firstPart + secondPart
})

console.log(capitalized)

let people = [
    {
        name: "Winter Walsh",
        age: 11
    },
    {
        name: "Clark Barton",
        age: 65
    },
    {
        name: "Lori Barton",
        age: 63
    },
    {
        name: "Mariane Whitaker",
        age: 11
    }

]

let peopleNames = people.map(function(person) {
    return person.name
})
console.log(peopleNames)

let canGoOrNot = people.map(function(person) {
    if (person.age > 15) return person.name + " can go to the movie"
    else return person.name + " is too young to go to the movie"
})
console.log(canGoOrNot)

let h1ify = people.map(function(person, i) {
    return `<h1 id="${i}">${person.name}<h1/><h2>${person.age}<h2/>`
})
console.log(h1ify)

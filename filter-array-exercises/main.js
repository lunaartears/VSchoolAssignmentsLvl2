let nums = [1, 2, 3, 4, 5, 6, 7];

let overFives = nums.filter(function(num) {
    if (num > 5) {
        return num
    }
})
console.log(overFives)

let evens = nums.filter(function(num) {
    if (num % 2 === 0)
    return num
})
console.log(evens)

let colors = ["red", "purple", "yellow", "white", "orange", "blue"];

let fiveOrLess = colors.filter(function(color) {
    if (color.length < 6)
    return color
})
console.log(fiveOrLess)

let people = [
    {
        name: "Winter Walsh",
        age: 11,
        member: true
    },
    {
        name: "Erik Nelson",
        age: 35,
        member: true
    },
    {
        name: "Anjela Robertson",
        age: 42,
        member: false
    },
    {
        name: "Lindsay Bug",
        age: 8,
        member: false
    }
]

let nonMembers = people.filter(function(person) {
    if (person.member === false)
    return person
})
console.log(nonMembers)

let oldPeeps = people.filter(function(person) {
    if (person.age > 17)
    return person
})
console.log(oldPeeps)

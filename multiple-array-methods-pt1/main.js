var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

function sortedAges(){
const olds = peopleArray.filter(function(person){
    if(person.age >= 18)
    return true

})
console.log(olds)

let sorted = olds.sort(function(x, y) {
    if (x.lastName < y.lastName) {
        return -1
    } else return 1
})

console.log(sorted)
}
sortedAges()


let ppl = [
{
    firstName: "Winter",
    lastName: "Dawn",
    age: 11
},
{
    firstName: "Autumn",
    lastName: "Aurora",
    age: 45
},
{
    firstName: "Summer",
    lastName: "Breeze",
    age: 82
}

]


let newArr = peopleArray.concat(ppl)
console.log(newArr)

let filtered = newArr.filter(function(person) {
    let lName = person.lastName
    if (lName.length - 1 === "y") {
        return person
    }
    if (lName.length - 1 === "a") {
        return person
    }
})
console.log(filtered)


let oneRemoved = newArr.splice(1, 1)
console.log(oneRemoved);
console.log(newArr)

let reversed = newArr.reverse()
console.log(reversed);

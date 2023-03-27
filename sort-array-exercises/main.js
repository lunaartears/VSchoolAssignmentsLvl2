let nums = [10, 8, 7, 12, 6, 2];

nums.sort(function(x, y) {
    return x - y
})
console.log(nums);

nums.sort(function(x, y) {
    return y - x
})
console.log(nums);

let words = ["dog", "wolf", "by", "family", "eaten"]

words.sort(function(x, y) {
    return x.length - y.length
})
console.log(words);

words.sort(function(x, y) {
    return y.length - x.length
})
console.log(words);

words.sort(function(x, y) {
    if (x < y) {
        return -1
    }
    if (x > y) {
        return 1
    }
    return 0
})
console.log(words);

let people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

people.sort(function(x, y) {
    return x.age - y.age
});
console.log(people)

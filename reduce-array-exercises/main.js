let nums = [1, 2, 3, 4];

let sum = nums.reduce(function(final, num) {
    return final += num;
})
console.log(sum);

let string = nums.reduce(function(final, num) {
    final = nums.join("")
    return final
})
console.log(string);

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let count = voters.reduce(function(final, voter) {
    if(voter.voted) {
        final++
    }
    return final;
}, 0)
console.log(count);

let voteCounts = voters.reduce(function(final, voter) {
        if (voter.age > 17 && voter.age < 26) {
            final.grpOne += 1
        }if (voter.age > 25 && voter.age < 36) {
            final.grpTwo += 1
        }if (voter.age > 35 && voter.age < 66) {
            final.grpThree += 1
        }if (voter.age > 17 && voter.age < 26 && voter.voted) {
            final.grpOneVotes += 1
        }if (voter.age > 25 && voter.age < 36 && voter.voted) {
            final.grpTwoVotes += 1
        }if (voter.age > 35 && voter.age < 66 && voter.voted)
            final.grpThreeVotes += 1
        return final
}, {grpOne: 0,
    grpOneVotes: 0,
    grpTwo: 0,
    grpTwoVotes: 0,
    grpThree: 0,
    grpThreeVotes: 0})
console.log(voteCounts)

let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let totalCost = wishlist.reduce(function(final, item) {
    final += item.price
    return final
}, 0);
console.log(totalCost);

let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

let joined = arrays.reduce(function(final, array) {
    final = final.concat(array)
    return final
})
console.log(joined);

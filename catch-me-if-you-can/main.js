function sumOfTwo(num1, num2) {
    if (typeof num1 !== "number") {
        throw "ERROR num1"
    }
    if (typeof num2 !== "number") {
        throw "ERROR num2"
    }
    return num1 + num2
}

try {
    sumOfTwo(1, "o")

}
catch(err) {
    console.log(err)
}

let user = {username: "winter", password: "roblox"}

function login(username, password) {
    if (user.username !== username) {
        throw "incorrect username"
    }
    if (user.password !== password) {
        throw "incorrect password"
    }
    else {
        console.log("Welcome In")
    }
}

try{
    login("winter", "roblox")
}
catch(err) {
    console.log(err)
}

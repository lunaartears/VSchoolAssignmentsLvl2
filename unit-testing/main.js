function findE(string) {
    if (string.includes("E")) {
        return string
    }
}

let actual =  findE("Enter")
let expected = "Enter"

if (actual !== expected) {
    throw new Error(`TEST FAILED: Expected ${expected}, but recieved ${actual}`)
} else {
    console.log(`TEST PASSED: ${expected} === ${actual}`)
}

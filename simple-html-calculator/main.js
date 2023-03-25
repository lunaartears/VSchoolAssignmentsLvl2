const addForm = document.add
console.log(addForm)
addForm.addEventListener("submit", function(event) {
    event.preventDefault()

    let addNum1 = parseInt(addForm.num1.value)
    let addNum2 = parseInt(addForm.num2.value)

        addForm.num1.value = ""
        addForm.num2.value = ""

    let added = addNum1 + addNum2
    document.getElementById("display").textContent = added


})
const subtractForm = document.subtract
subtractForm.addEventListener("submit", function(event) {
    event.preventDefault()

    let subNum1 = parseInt(subtractForm.num1.value)
    let subNum2 = parseInt(subtractForm.num2.value)

        subtractForm.num1.value = ""
        subtractForm.num2.value = ""

    let subtracted = subNum1 - subNum2
    document.getElementById("display2").textContent = subtracted

})
const multiplyForm = document.multiply
multiplyForm.addEventListener("submit", function(event) {
    event.preventDefault()

    let multNum1 = parseInt(multiplyForm.num1.value)
    let multNum2 = parseInt(multiplyForm.num2.value)

        multiplyForm.num1.value = ""
        multiplyForm.num2.value = ""

    let multiplied = multNum1 * multNum2
    console.log(multiplied)
    document.getElementById("display3").textContent = multiplied

})

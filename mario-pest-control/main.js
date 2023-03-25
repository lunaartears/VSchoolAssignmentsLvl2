let form = document.myForm

form.addEventListener("click", function(event) {
    event.preventDefault()

    let num1 = parseInt(form.goombasCaught.value)
    let num2 = parseInt(form.bombsCaught.value)
    let num3 = parseInt(form.cheepsCaught.value)

    let totalCost = num1 + num2 + num3

    document.getElementById("totalCost").textContent = totalCost
})

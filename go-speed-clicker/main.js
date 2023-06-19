let button = document.getElementById("button")
let timesClicked = 0
let eventListener = button.addEventListener("click", function() {
    timesClicked++
    let textContent = document.getElementById("display").textContent = timesClicked
    localStorage.setItem(eventListener, textContent)
    localStorage.getItem(eventListener)
})

class Player {
    constructor(name, totalCoins, status, hasStar) {
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = hasStar
}

    setName(namePicked) {
        if (namePicked === "Mario") {
            this.name = "Mario"
        }
        else if (namePicked === "Luigi") {
            this.name = "Luigi"
        }
    }

    gotHit() {
        if (this.status === "Star") {
            this.status = "Powered Up"
        }
        else if (this.status === "Powered Up") {
            this.status = "Big" }
        else if (this.status === "Big") {
            this.status = "Small" }
        else if (this.status === "Small") {
            this.status = "Dead" }
        player1.print()
        areYouDeadYet()
    }
    gotPoweredUp() {
        if (this.status === "Small") {
            this.status = "Big"
        }
        else if (this.status === "Big") {
            this.status = "Powered Up"
        }
        else if (this.status === "Powered Up") {
            this.status = "Star"
        }
        player1.print()
        areYouDeadYet()
    }
    addCoin() {
        this.totalCoins++
        player1.print()
        areYouDeadYet()
    }
    print() {
        console.log(`Name: ${this.name}
Status: ${this.status}
Total Coins: ${this.totalCoins}
Star??: ${this.hasStar}`)
    }

}
let player1 = new Player("Luigi", 10, "Big", false)
player1.print()

function randomRange() {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        player1.gotHit()
    }
    else if (randomNum === 1) {
        player1.gotPoweredUp()
    }
    else if (randomNum === 2) {
        player1.addCoin()
    }
}

let intervalID = setInterval(randomRange, 2000)
function areYouDeadYet() {
    if (player1.status === "Dead") {
        console.log("You Have Died")
        clearInterval(intervalID)

    }
}

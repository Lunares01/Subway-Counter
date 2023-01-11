//document.getElementById("count-el").innerText=5
// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)


// // 1. Create a variable, myAge, and set its value to your age.

// let myAge = 26

// // 2. Log the myAge Variable to the console.

// console.log(myAge)

// let myAge = 26
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// count + 1

// let count = 5

// count = 3
// console.log(count)

// let bonusPoints = 50

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect hte new count

// function increment() {
//     // body of the function
//     console.log("button was clicked")
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// function myLogger() {
//     console.log(42)
// }

// myLogger()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime() {
//     let totalTime = lap1  + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime()

// let lapsCompleted = 0


// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

// incrementLap()
// incrementLap()
// incrementLap()

// let username = "per"

// console.log(username)

// let message = "You have tree new notifications." 

// let name = "John"
// let greeting = "Hi, my name is"

// let myGreeting = `${greeting} ${name}.`
// console.log(myGreeting)

// let points = 4
// let bonusPoints = 10

// let totalPoints = 4 + 10

//9
//24
//51
//100100

// 


// function increment() {
//     count = count + 1
//     countEl.innerText = count
//     console.log(count)
// }
// function increment() {
//     count = count + 1
//     countEl.innerText = count
//     console.log(count)
// }~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let countEl = document.getElementById("count-el") 
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count = 0

// Increment Function
increment = () => {
    count += 1
    countEl.textContent = count
    console.log(`People Entered: ${count}`)
}

// Save Function
save = () => {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

    console.log (`Saved: ${count}`)
}

// Clear Entries Function
clearEnt = () => {
    saveEl.textContent = "Previous Entries:"
}

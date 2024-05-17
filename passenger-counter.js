// 1. Initialize the count as 0
// 2. listen for clicks on the increment button
// 3. increment the count variable when the button is clicked
// 4 change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
let passEl = document.getElementById("pass-el")
let count = 0

function touch() {
    count += 1
    countEl.textContent = count
}

function pass() {
    let entries = count + " - "
    passEl.textContent += entries
    count = 0
    countEl.textContent = count
}


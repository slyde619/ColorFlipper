// Select btn and color
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

// Create array of hexColor
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', "B", 'C', 'D', 'E', 'F']

// Add eventListener on btn
btn.addEventListener('click', () => {
    // loop to get six values
    let hexCode = "#"
    for(let index = 0; index < 6; index++){
        // concat hexCode to each values generated
        let randomNum = generateRandomNum()
        hexCode += hexColor[randomNum]
    }
    color.textContent = hexCode
    document.body.style.backgroundColor = hexCode
})

// Generate Random Value based on hex length
function generateRandomNum(){
    return Math.floor(Math.random() * hexColor.length)
}
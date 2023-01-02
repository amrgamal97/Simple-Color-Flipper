let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let button = document.querySelector(".btn");
let colorName = document.querySelector(".color")
let mainPage = document.querySelector("main")

button.addEventListener("click", function () {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += colors[randomHex()];
    }
    colorName.textContent = hex;
    document.body.style.backgroundColor = hex;
})

function randomHex() {
    return Math.floor(Math.random() * colors.length);
}
console.log(randomHex())
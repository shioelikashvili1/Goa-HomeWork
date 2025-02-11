let button = document.getElementById("colorchange");
let color = document.getElementById("body");
let hexCode = ['1', '2', '3', '4', '5', '6', '7', '8', 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener("click", () => {
    let hex = "#";
    for(let i = 0; i < 6; i++) {
        hex += hexCode[Math.trunc(Math.random() * hexCode.length)];
    }
    color.style.background = hex;
});

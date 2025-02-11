document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("generateButton");
    var display = document.getElementById("randomNumberDisplay");

    button.addEventListener("click", function() {
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        display.innerText = randomNumber;
    });
});
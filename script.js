let gameBoxes = document.getElementsByClassName("game_wrapper");

// Opens rock paper scissors on box click
gameBoxes.item(0).addEventListener("click", function() {
    window.location.href = "rps.html";
});

// Opens classic snake
gameBoxes.item(1).addEventListener("click", function() {
    window.location.href = "snake.html";
});

// Opens brain training simulator
gameBoxes.item(2).addEventListener("click", function() {
    window.location.href = "jump.html";
});

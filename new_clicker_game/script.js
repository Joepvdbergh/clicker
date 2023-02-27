// Define variables
var points = 0;
var clickButton = document.getElementById("clickButton");
var pointsDisplay = document.getElementById("points");
var achievement10Display = document.getElementById("achievement10");
var achievement25Display = document.getElementById("achievement25");
var achievement50Display = document.getElementById("achievement50");
var achievement100Display = document.getElementById("achievement100");
var resetButton = document.getElementById("resetButton");

// Add click event listener to button
clickButton.addEventListener("click", function () {
    points++;
    pointsDisplay.innerHTML = "Points: " + points;

    // Check for achievements
    if (points == 10) {
        achievement10Display.innerHTML = "Achievement Unlocked: 10 Clicks!";
        achievement10Display.classList.add("achievement", "achievement-unlocked");
    } else if (points == 25) {
        achievement25Display.innerHTML = "Achievement Unlocked: 25 Clicks!";
        achievement25Display.classList.add("achievement", "achievement-blue");
    } else if (points == 50) {
        achievement50Display.innerHTML = "Achievement Unlocked: 50 Clicks!";
        achievement50Display.classList.add("achievement", "achievement-purple");
    } else if (points == 100) {
        achievement100Display.innerHTML = "Achievement Unlocked: 100 Clicks!";
        achievement100Display.classList.add("achievement", "achievement-orange");
    }
});

// Add click event listener to reset button
resetButton.addEventListener("click", function () {
    points = 0;
    pointsDisplay.innerHTML = "Points: " + points;
    achievement10Display.innerHTML = "";
    achievement10Display.classList.remove("achievement", "achievement-unlocked");
    achievement25Display.innerHTML = "";
    achievement25Display.classList.remove("achievement", "achievement-blue");
    achievement50Display.innerHTML = "";
    achievement50Display.classList.remove("achievement", "achievement-purple");
    achievement100Display.innerHTML = "";
    achievement100Display.classList.remove("achievement", "achievement-orange");
});
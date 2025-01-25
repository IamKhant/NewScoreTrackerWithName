// let homeScore = document.getElementById("home-score");
// let guestScore = document.getElementById("guest-score");
// let homeSc = 0;
// let guestSc = 0;
// let team1Input = document.getElementById("team1-input");
// let team2Input = document.getElementById("team2-input");

// let team1Display = document.getElementById("team1-name");
// let team2Display = document.getElementById("team2-name");


// function Start(){
//     team1Display.textContent = team1Input.value;
//     team2Display.textContent = team2Input.value;
// }


// function resetScore() {
//     // Reset the scores to 0
//     homeSc = 0;
//     guestSc = 0;

//     // Update the displayed scores
//     homeScore.innerText = homeSc;
//     guestScore.innerText = guestSc;
// }
// function homeOne() {
//     homeSc = homeSc + 1;
//     homeScore.innerText = homeSc;
// }

// function homeTwo() {
//     homeSc = homeSc + 2;
//     homeScore.innerText = homeSc;
// }

// function homeThree() {
//     homeSc = homeSc + 3;
//     homeScore.innerText = homeSc;
// }
// function homeMinusOne() {
//     homeSc = homeSc - 1;
//     homeScore.innerText = homeSc;
// }

// function homeMinusTwo() {
//     homeSc = homeSc - 2;
//     homeScore.innerText = homeSc;
// }

// function homeMinusThree() {
//     homeSc = homeSc - 3;
//     homeScore.innerText = homeSc;
// }


// function guestOne() {
//     guestSc = guestSc + 1;
//     guestScore.innerText = guestSc;
// }

// function guestTwo() {
//     guestSc = guestSc + 2;
//     guestScore.innerText = guestSc;
// }

// function guestThree() {
//     guestSc = guestSc + 3;
//     guestScore.innerText = guestSc;
// }
// function guestMinusOne() {
//     guestSc = guestSc - 1;
//     guestScore.innerText = guestSc;
// }

// function guestMinusTwo() {
//     guestSc = guestSc - 2;
//     guestScore.innerText = guestSc;
// }

// function guestMinusThree() {
//     guestSc = guestSc - 3;
//     guestScore.innerText = guestSc;
// }

        // Initialize Variables
        let homeScore = document.getElementById("home-score");
        let guestScore = document.getElementById("guest-score");
        let homeSc = 0;
        let guestSc = 0;

        // Update Team Names on Start
        document.getElementById("start-btn").addEventListener("click", function () {
            const team1Name = document.getElementById("team1-input").value || "TEAM 1";
            const team2Name = document.getElementById("team2-input").value || "TEAM 2";
            document.getElementById("team1-name").textContent = team1Name;
            document.getElementById("team2-name").textContent = team2Name;
        });

        // Score Management Functions
        function homeOne() { homeSc++; updateScore(); }
        function homeTwo() { homeSc += 2; updateScore(); }
        function homeThree() { homeSc += 3; updateScore(); }
        function homeMinusOne() { homeSc--; updateScore(); }
        function homeMinusTwo() { homeSc -= 2; updateScore(); }
        function homeMinusThree() { homeSc -= 3; updateScore(); }
        function guestOne() { guestSc++; updateScore(); }
        function guestTwo() { guestSc += 2; updateScore(); }
        function guestThree() { guestSc += 3; updateScore(); }
        function guestMinusOne() { guestSc--; updateScore(); }
        function guestMinusTwo() { guestSc -= 2; updateScore(); }
        function guestMinusThree() { guestSc -= 3; updateScore(); }

        function updateScore() {
            homeScore.textContent = homeSc;
            guestScore.textContent = guestSc;
        }

        function resetScore() {
            homeSc = 0;
            guestSc = 0;
            updateScore();
        }
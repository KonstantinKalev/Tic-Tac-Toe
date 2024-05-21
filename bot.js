let cells = document.querySelectorAll('.cell');
let counter = 0;
let gameOver = false; // Flag to track game state

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin(player) {
    for (let combo of winCombinations) {
        if (combo.every(index => cells[index].querySelector('.cellTxt').innerHTML === player)) {
            combo.forEach(index => cells[index].style.backgroundColor = "green");
            gameOver = true; // Game over
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return [...cells].every(cell => cell.classList.contains('taken'));
}

function markAllTaken() {
    cells.forEach(cell => cell.classList.add('taken'));
}

function playerMove(cell, cellTxt) {
    if (!cell.classList.contains('taken') && counter % 2 == 0 && !gameOver) {
        cellTxt.innerHTML = 'X';
        cellTxt.style.color = "black";
        cell.classList.add('taken');
        counter++;

        if (checkWin('X')) {
            markAllTaken(); // Mark all cells as taken
            return;
        } else if (checkDraw()) {
            markAllTaken(); // Mark all cells as taken
            cells.forEach(cell => cell.style.backgroundColor = "red");
            gameOver = true; // Game over
            return;
        }

        setTimeout(botMove, 1000); // Wait for 1 second before the bot makes its move
    }
}

function botMove() {
    if (!gameOver) { // Check if game is not over
        let botChoice;
        let chosenCell;
        let maxAttempts = 100; // Prevent infinite loop
        let attempts = 0;

        do {
            botChoice = Math.floor(Math.random() * 9);
            chosenCell = cells[botChoice];
            attempts++;
        } while (chosenCell.classList.contains('taken') && attempts < maxAttempts);

        if (attempts < maxAttempts) {
            let chosenCellTxt = chosenCell.querySelector('.cellTxt');
            chosenCellTxt.innerHTML = 'O';
            chosenCellTxt.style.color = "black";
            chosenCell.classList.add('taken');
            counter++;

            if (checkWin('O')) {
                markAllTaken(); // Mark all cells as taken
                gameOver = true; // Game over
            } else if (checkDraw()) {
                markAllTaken(); // Mark all cells as taken
                cells.forEach(cell => cell.style.backgroundColor = "red");
                gameOver = true; // Game over
            }
        } else {
            console.error("Bot couldn't find an empty cell.");
        }
    }
}

cells.forEach((cell) => {
    let cellTxt = cell.querySelector('.cellTxt');
    cell.addEventListener("click", function() {
        playerMove(cell, cellTxt);
    });
});
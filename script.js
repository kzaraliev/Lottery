const drawNumberBtn = document.getElementById('draw-number-btn');
const ballsContainer = document.getElementById('balls-container');
const drawnNumbersList = document.getElementById('drawn-numbers');

let drawnNumbers = [];

function drawNumber() {
    if (drawnNumbers.length >= 6) {
        alert("Vous avez déjà tiré 6 numéros.");
        return;
    }

    // Генерираме число от 1 до 49
    let number;
    do {
        number = Math.floor(Math.random() * 20) + 1;
    } while (drawnNumbers.includes(number));

    // Добавяме числото към списъка с изтеглени числа
    drawnNumbers.push(number);

    // Създаваме топка за числото
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.textContent = number;
    ballsContainer.appendChild(ball);
}

drawNumberBtn.addEventListener('click', drawNumber);

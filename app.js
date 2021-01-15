const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};
makeRows(10, 10);


const opponentContainer = document.getElementById("container")
const containerClone = opponentContainer.cloneNode(true)
gameboard.append(opponentContainer)
const enemy = document.body.appendChild(containerClone)
enemy.id = "opponentContainer"

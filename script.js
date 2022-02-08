//create grid


const container = document.querySelector('#container');

let gridRows = 16;
let gridColumns = 16;

function createGrid (gridColumns, gridRows) {
    for (x = 1; x <= gridColumns; x++) {
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        for (y = 1; y <= gridRows; y++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            column.appendChild(cell);
        }
    }
}

// function createRows (gridRows) {
//     for (i = 1; i <= gridRows; i++) {
//         const row = document.createElement('div');
//         row.classList.add('row');
//         column.appendChild(row);
//     }
// }

window.onload = createGrid(gridColumns, gridRows);
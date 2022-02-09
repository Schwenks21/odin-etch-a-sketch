const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear-button');
const resizeButton = document.querySelector('#resize-button');

clearButton.addEventListener('click', clearGrid);
resizeButton.addEventListener('click', resizeGrid);

createGrid(16, 16);
etchCell();

//create the grid 
function createGrid (gridColumns, gridRows) {
    //create columns first
    for (x = 1; x <= gridColumns; x++) {
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        //before creating the next column, create the cells within the col
        for (y = 1; y <= gridRows; y++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            column.appendChild(cell);
        }
    }
}

//function that clears the grid
function clearGrid () {
    let etchedCells = document.querySelectorAll('.etched');
    etchedCells.forEach(cell => {
        cell.classList.remove('etched');
    })
}

//function that resizes the grid
function resizeGrid () {
    let newSize = prompt("Please enter how many cells wide you would like the new grid to be (10-100):", '16');
    if (newSize > 100 || newSize < 10) {
        newSize = prompt("Please enter how many cells wide you would like the new grid to be (10-100):", '16');
    } else {
        deleteGrid();
        createGrid(newSize, newSize);
        etchCell();
    }
}

//function that deletes current grid
function deleteGrid () {
    container.innerHTML = '';
}

//add function that permanently fills in the cell when the mouse hovers over it
function etchCell () {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('etched');
        });
    });
}


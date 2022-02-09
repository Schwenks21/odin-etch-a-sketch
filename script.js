const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear-button');
const resizeButton = document.querySelector('#resize-button');
const blackButton = document.querySelector('#black-button');
const colorButton = document.querySelector('#color-button');

clearButton.addEventListener('click', clearGrid);
resizeButton.addEventListener('click', resizeGrid);
blackButton.addEventListener('click', etchCellBlack);
colorButton.addEventListener('click', etchCellColor);

const toggleButtons = document.querySelectorAll('.toggle-button');
toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (document.querySelector('.active')) {
            document.querySelector('.active').classList.remove('active');
            btn.classList.add('active');
        } else {
            btn.classList.add('active');
        }
    })
})

createGrid(16, 16);
etchCell();

//checks to see what button is selected before invoking the black or color etch function
function etchCell() {
    if (colorButton.classList.contains('active')) {
        etchCellColor();
    } else {
        etchCellBlack();
    }
}

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
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
            cell.setAttribute("style", "background-color:'' ");
        });
    etchCell();
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
function etchCellBlack () {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', 'background-color: black');
        });
    });
}

//function that creates a random color
function getRandomColor () {
    const colorR = Math.floor(Math.random() * 255);
    const colorG = Math.floor(Math.random() * 255);
    const colorB = Math.floor(Math.random() * 255);
    return 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')';
}

//create a function to color in random rgb colors when the mouseover event occurs at each cell event
function etchCellColor () {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            let newColor = getRandomColor();
            cell.setAttribute('style', 'background-color:'+newColor);
        })
    })
}

//create function to color in shades of black that go from lighter to dark on every pass
//when shade button is clicked, start by making the background color rbg(240/240/240) and on every pass
//subtract 24 from the rgb values until it fets to black rbg(0,0,0) on the final pass

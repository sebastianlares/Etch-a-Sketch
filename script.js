const gridBox = document.querySelector('.gridBox');

gridSize(16);

const resetGrid = document.querySelector('#reset');
const newGridSize = document.querySelector('#size');
const colorButton = document.querySelector('#random');
const BlackButton = document.querySelector('#black');

gridColor('black', '1');

resetGrid.addEventListener('click', () => {
    deleteGrid();
    gridSize(16);
    gridColor('black', '1');
});

newGridSize.addEventListener('click', () => {
    let size = parseInt(window.prompt('Enter new grid size: '));
    if (isNaN(size)) {
        deleteGrid();
        gridSize(16);
        gridColor('black', '1');
        return;
    }
    deleteGrid();
    gridSize(size);
    gridColor('black', '1');
});

colorButton.addEventListener('click',() => {
    gridColor(randomColor(), '1');
})

BlackButton.addEventListener('click', () => {
    gridColor('black', '1');
});
// for loop that itinerates over the rows and columnd of the grid, being the index the input from the prompt (size)
function gridSize (size) {

    for (let i = 0; i < size; i++)
    {
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        gridBox.appendChild(rowDiv);
        
        for (let j = 0; j < size; j++)
        {
            let colDiv = document.createElement('div');
            colDiv.setAttribute('class', 'column');
            rowDiv.appendChild(colDiv);
        }
    }
    const rowStyle = document.querySelectorAll('.row');

    rowStyle.forEach(el => {
        el.style.display = 'flex';
        el.style.width = '100%' ;
        el.style.height = '100%';
    });

    const columnStyle = document.querySelectorAll('.column');

    columnStyle.forEach(el => {
        el.style.width = '100%';
        el.style.height = '100%';
        el.style.border = '0.5px solid black';
    });
}

// function that generates random color 
function randomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

// clears the grid
function clearGrid () {

    const newGrid = document.querySelectorAll('.column');
    newGrid.forEach(el => {
        el.style.background = 'white';
        el.style.border = '0.5px solid black';
    })
}

// deletes the grid, works together with the clearGrid function to generate a new grid
function deleteGrid(){
    while (gridBox.firstChild){
        gridBox.removeChild(gridBox.firstChild);
    }
}

function gridColor(color, opacity) {
    let newColor;
    const grid = document.querySelectorAll('.column');
    grid.forEach(el => {
        el.addEventListener('mouseover', () => {
            if (color == 'black') {
                el.style.background = 'black';
            }
            else {
                newColor = randomColor();
                el.style.background = newColor;
            }
            el.style.border = '0.5 solid black'; 
        });
    });
}

  
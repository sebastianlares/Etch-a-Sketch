const gridBox = document.querySelector('.gridBox');

gridSize(16);

const resetGrid = document.querySelector('#reset');

resetGrid.addEventListener('click', () => {
    deleteGrid();
    gridSize(16);
});

const newGridSize = document.querySelector('#size');
//event listener for the size button
newGridSize.addEventListener('click', () => {
    let size = prompt('Enter new grid size: ');
    deleteGrid();
    gridSize(size);
});
//event listener for the random color button 
const randomColorButton = document.querySelector('#random');

randomColorButton.addEventListener('click', () => {
    
    const randomGrid = document.querySelectorAll('.column');
    randomGrid.forEach(el => {
        el.addEventListener('mouseover', () => {
        el.style.background = randomColor();
        el.style.border = '0.5px solid black';
        el.style.opacity = '1';
        });
    });
})

const greyButton = document.querySelector('#grey');
//event listener for the grey button
greyButton.addEventListener('click', () => {

    const greyGrid = document.querySelectorAll('.column');
    greyGrid.forEach(el => {
        el.addEventListener('mouseover', () => {
            el.style.border = '0.5px solid black';
            el.style.background = 'black';
            // here is the main problem: in order to make they grey scale work, the opacity needs to be toned down.
            //if they random color button is pressed before the grey button, the opacity does change and stays on
            el.style.opacity -= '-0.1';
        });
    });
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

        el.addEventListener('mouseover', () => {
            el.style.background = 'black';
            el.style.border = '0.5px solid #272626';
        });
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
        el.addEventListener('mouseover', () => {
            el.style.background = 'black';
        });
    })
}

// deletes the grid, works together with the clearGrid function to generate a new grid
function deleteGrid(){
    while (gridBox.firstChild){
        gridBox.removeChild(gridBox.firstChild);
    }
}

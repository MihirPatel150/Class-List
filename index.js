//SELECTORS

const table = document.querySelector('.table')
const addButton = document.querySelector('#add-button')
const actionsDiv = document.querySelector('#actions-div')
// const actionButton = document.querySelectorAll('.fa-solid')


//EVENT LISTENER
// window.onload = addNewRow;
addButton.addEventListener('click', addNewRow)
document.addEventListener('click', indent)


// window.addEventListener('keydown', (event) => {
//     if(event.repeat) return;

//     console.log(event.key)
// })


//FUNCTIONS
let counter = 6;

function addNewRow(event) {
    event.preventDefault();

    //Create new div for action-buttons
    const newRow = document.createElement('row')
    newRow.setAttribute('id', 'row' + counter)
    newRow.classList.add('grid-column')
    newRow.classList.add('parent')

    //Add Action buttons to new row
    const newRowActions = document.createElement('div')
    newRowActions.innerHTML = actionsDiv.innerHTML
    newRow.appendChild(newRowActions)

    //New input text Element
    const newRowInput = document.createElement("input")
    //Add atributes to input element
    newRowInput.setAttribute('autocomplete', 'off')
    newRowInput.setAttribute('placeholder', 'Add Standard')
    newRowInput.setAttribute('type', 'text')
    newRowInput.setAttribute('spellcheck', 'false')
    //Append Input emelent to new row
    newRow.appendChild(newRowInput)

    //Add divider below wvwry new row to separate them
    const divider = document.createElement('hr')
    //Append new List section to List-row
    newRow.appendChild(divider);

    //Append new row to main table
    table.appendChild(newRow)


    counter++;
}

function indent(event) {

    const clickedElement = event.target;
    const currentRowActions = clickedElement.parentElement;
    const currentRow = currentRowActions.parentElement;


    //Indent 
    if (clickedElement.classList[1] === "fa-arrow-right") {

        if (currentRow.classList[1] === 'grand-child') return;

        else if (currentRow.classList[1] === 'child') {
            currentRow.classList.remove('child')
            currentRow.classList.add('grand-child')
        }

        else if (currentRow.classList[1] === 'parent') {
            currentRow.classList.remove('parent')
            currentRow.classList.add('child')
        }
    }

    //Outdent
    if (clickedElement.classList[1] === "fa-arrow-left") {
        if (currentRow.classList[1] === 'parent') return;

        else if (currentRow.classList[1] === 'child') {
            currentRow.classList.remove('child')
            currentRow.classList.add('parent')
        }

        else if (currentRow.classList[1] === 'grand-child') {
            currentRow.classList.remove('grand-child')
            currentRow.classList.add('child')
        }
    }

    //Delete
    if (clickedElement.classList[1] === "fa-trash") {

        let totalNumberOfRows = document.getElementsByTagName("row").length //4
        let currentRowNumber;

        for (j = 0; j < totalNumberOfRows; j++) {
            let getRow = document.querySelectorAll('row')[j]
            // console.log(getRow)

            if (currentRow.getAttribute("id") === getRow.getAttribute("id")) {
                currentRowNumber = j + 1;   //1,2,3,4,....
            }
        }

        for (i = currentRowNumber; i <= totalNumberOfRows; i++) {   //clicked-row-number -> total rows
            getRow = document.querySelectorAll('row')[i]
            const nextRow = currentRow.nextElementSibling

            
            if(currentRow.classList[1] === 'parent') {
                if(nextRow === null) return currentRow.remove();
                else if(nextRow.classList[1] !== 'parent') nextRow.remove();
                else return currentRow.remove();
            }
            
            else if(currentRow.classList[1] === 'child') {
                if(nextRow === null) return currentRow.remove();
                else if(nextRow.classList[1] === 'grand-child') nextRow.remove();
                else return currentRow.remove();
            }
            
            else if(currentRow.classList[1] === 'grand-child') return currentRow.remove();
        }
    }




}

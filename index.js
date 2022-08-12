//SELECTORS

const table = document.querySelector('.table')
const addButton = document.querySelector('#add-button')
const actionsDiv = document.querySelector('#actions-div')


//EVENT LISTENER
window.onload = addNewRow;
addButton.addEventListener('click', addNewRow)

// window.addEventListener('keydown', (event) => {
//     if(event.repeat) return;

//     console.log(event.key)
// })


//FUNCTIONS
let counter = 4;

function addNewRow(event) {
    event.preventDefault();

    //Create new div for action-buttons
    const newRow = document.createElement('row')
    newRow.classList.add('grid-column')
    newRow.setAttribute('id', 'row'+counter)

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

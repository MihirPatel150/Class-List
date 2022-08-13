    //Delete
    if (clickedElement.classList[1] === "fa-trash") {

        let currentRowNumber = parseInt(currentRow.id.slice(3, 4));  //1,2,3,4,...
        let totalNumberOfRows = document.getElementsByTagName("row").length //4


        for (j=0; j<totalNumberOfRows; j++){
            getRow = document.querySelectorAll('row')[j]
            if(currentRow.getAttribute("id") === getRow.getAttribute("id")) {
                currentRowNumber = j+1;   //1,2,3,4,....
            }
        }

        console.log({currentRowNumber, currentRow, totalNumberOfRows})



        for (let i = currentRowNumber; i < totalNumberOfRows; i++) {   //clicked-row-number -> total rows
            console.log(i)
            let getRow = document.querySelectorAll('row')[i]
            // let getRowNumber = parseInt(getRow.id.slice(3, 4));

            if (currentRow.classList[1] === "parent") {
                if (getRow.classList[1] === "child" || getRow.classList[1] === "grand-child") getRow.remove();
                else return console.log(currentRow)
            }

            else if (currentRow.classList[1] === "child") {
                if (getRow.classList[1] === "grand-child") getRow.remove();
                else return console.log(currentRow)
            }

            else return console.log(currentRow)
        }

        //For last row
        console.log(currentRow)

    }
function solve() {
    
    const buttonsElement = Array.from(document.querySelectorAll('tfoot button'));
    const rows = document.querySelectorAll('table tbody tr');
    const cleared = document.querySelectorAll('input');
    const table = document.querySelector('table');
    const result = document.querySelector('#check p');
    const matrix = [];
    
    buttonsElement[0].addEventListener('click', matrixBuild);
    buttonsElement[1].addEventListener('click', clearMatrix);
    
    function matrixBuild() {
        for (let row of rows) {
            let current = []
            for (let tdInputs of row.querySelectorAll('input')) {
                current.push(Number(tdInputs.value))
            }
            matrix.push(current)
        }

        let isSudomu = true;
        let theSum = 0;

        for (let i = 0; i < matrix.length; i++) {

            if ([...new Set(matrix[i])].length != matrix.length) {  //check if row length is equal to matrix length by unique elements
                isSudomu = false;
                break;
            }
            if (theSum == 0) {          // defining basic sum 
                theSum = matrix[i].reduce((a, b) => a + b, 0);
            }
            let colSum = 0;

            for (let j = 0; j < matrix.length; j++) {  //comparing column sum to basic sum
                colSum += matrix[j][i];
            }
            
            if (theSum != colSum) {  //check if not equal
                isSudomu = false;
                break;
            }
        }
        
        if (isSudomu) {
            table.style.border = '2px solid green';
            result.textContent = 'You solve it! Congratulations!'
            result.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            result.textContent = 'NOP! You are not done yet...'
            result.style.color = 'red';
        }
    }

    function clearMatrix(){  //clearing the field
        for(let el of cleared){
            el.value = ''
        }
        table.style.border = 'none';
        result.textContent = ''
    }
}
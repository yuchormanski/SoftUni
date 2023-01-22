
const rows = document.getElementsByTagName('tr');
const buttonElement = document.getElementsByTagName('button')[0];
buttonElement.addEventListener('click', colorize);

function colorize(){
    for(let i = 1; i < rows.length; i+=2){
        rows[i].style.backgroundColor = 'teal';
    }
}
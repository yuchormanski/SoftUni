function sumTable(){
    const td = document.getElementsByTagName('td');
    const result = document.getElementById('sum');
    const button = document.getElementsByTagName('button')[0];
    
    let total = 0;
    for(let i = 1; i < td.length; i+=2){
        total += Number(td[i].textContent);
    }
    result.textContent = total
    // document.getElementsByTagName('button')[0].removeAttribute('onclick');
    button.disabled = true
}
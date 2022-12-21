function filterString(){
    let filtered = 'Alabalanica'.split('').map((x,i) => x==='a'? i:'').filter(x => x).join(', ');
    console.log(filtered);
}
filterString()
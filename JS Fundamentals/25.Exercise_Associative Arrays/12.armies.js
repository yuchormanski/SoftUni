
function armies(armyArray) {
    let armies = {};
    //finding leaders
    for(let army of armyArray){
        if(army.includes(' arrives')){
            let leader = army.split(' arrives')[0];
            if(!armies[leader]){
                armies[leader] = {};
            }
        }
    }

}
armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
])
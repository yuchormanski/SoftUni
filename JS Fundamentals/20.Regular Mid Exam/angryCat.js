function angryCat(items, entryPoint, valuable) {
    let left = items.slice(0, entryPoint - 1);
    let right = items.slice(entryPoint);
    let sumL = 0;
    let sumR = 0;

    if (valuable === "expensive") {
        sumL = left.filter(n => n >= items[entryPoint+1]).reduce((el,x) => el + x);
        sumR = right.filter(n => n >= items[entryPoint]).reduce((el,x) => el + x);
    } else if (valuable === "cheap"){
        sumL = left.filter(n => n < items[entryPoint+1]).reduce((el,x) => el + x);
        sumR = right.filter(n => n < items[entryPoint]).reduce((el,x) => el + x);
    }
    if(sumL >= sumR){
        console.log(`Left - ${sumL}`);
    } else{
        console.log(`Right - ${sumR}`);
    }
}
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")
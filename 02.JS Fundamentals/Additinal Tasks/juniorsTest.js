/* - Алгоритъм за намиране на 3-тото най-голямо число в масив, но без да бъдат размествани оригиналните индекси на числата в масива.
- Бонус точки, ако бъде решен само с един цикъл и без никакви методи (за да е по-бърз).
- Накрая трябва да се принтира 3-тото най-голямо число и индекс позицията му в дадения масив.
Подсказка: внимавайте за повтарящи числа.
>> Примерен вход: [91, 2, 33, 51, 54, 39, 34, 61, 34, 91]; */

function test(data) {
    let first = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;
    let third = Number.MIN_SAFE_INTEGER;
    let fIndex = 0;
    let sIndex = 0;
    let tIndex = 0;

    for (let i = 0; i < data.length; i++) {
        let num = data[i];
        if(num > first && num > second && num > third){
            let tIndex = 0;
            let temp = first;
            first = num;
            fIndex = i;
            [second, temp] = [temp, second];
            [third,temp] = [temp, third];
            if(data.includes(second)){
                sIndex = data.indexOf(second);
            }
            if(data.includes(third)){
                tIndex = data.indexOf(third);
            }
        } else if(num < first && num > second && num > third){
            let temp = second;
            second = num;
            [sIndex,tIndex] = [tIndex, sIndex];
            sIndex = i;
            [third,temp] = [temp, third];
            tIndex = tIndex;
        } else if(num < first && num < second && num > third){
            third = num;
            tIndex = i;
        }
    }
    // console.log(`${third}\n${tIndex}`);
    console.log(`${first} ${fIndex}\n${second} ${sIndex}\n${third} ${tIndex}`);

}
test([91, 2, 33, 51, 54, 39, 34, 61, 34, 91]);
function solve() {
    const inputElement = document.getElementById('inputs');
    const textArea = inputElement.children[1];
    const button = document.getElementById('btnSend');

    button.addEventListener('click', getData);


    function getData(event) {
        const data = JSON.parse(textArea.value);
        let bestAvg = 0;
        let bestName = '';


        // creating objects
        const restaurants = {};

        for (let line of data) {
            let [eatery, ...rest] = line.split(' - ');
            let workers = rest.join('').split(', ');
            if (!restaurants[eatery]) {
                restaurants[eatery] = {}
            };

            for (let personData of workers) {
                let [name, salary] = personData.split(' ');
                salary = Number(salary)

                if (!restaurants[eatery][name]) {
                    restaurants[eatery][name] = 0;
                }
                restaurants[eatery][name] += salary;
            }
            
            let allSums = Object.values(restaurants[eatery]);
            let totalAverage = allSums.reduce((acc, x) => acc + x, 0) / allSums.length;

            if (totalAverage > bestAvg) {
                bestAvg = totalAverage;
                bestName = eatery;
            }
        }
        // end creating objects

        let workers = Object.entries(restaurants[bestName]).sort((a, b) => b[1] - a[1]);
        let resultText = '';

        for (let [worker,salary] of workers) {
            resultText += `Name: ${worker} With Salary: ${salary} `;
        }

        document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${bestAvg.toFixed(2)} Best Salary: ${(workers[0][1]).toFixed(2)}`;
        document.querySelector('#workers p').textContent = resultText;
    }
}
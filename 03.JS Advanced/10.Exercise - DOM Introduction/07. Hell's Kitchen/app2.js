function solve() {
    const inputElement = document.getElementById('inputs');
    const textArea = inputElement.children[1];
    const button = document.getElementById('btnSend');
    const bestRestaurant = document.getElementById('bestRestaurant').children[2];
    const workersElement = document.getElementById('workers').children[2];

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
        let restBestSalary = Object.values(restaurants[bestName]);
        
        let workers = Object.entries(restaurants[bestName]).sort((a, b) => b[1] - a[1]);
        let best = workers[0][1];
        let resultText = '';

        for (let worker of workers) {
            resultText += `Name: ${worker[0]} With Salary: ${worker[1]} `;
        }
        let restaurantOutput = `Name: ${bestName} Average Salary: ${bestAvg.toFixed(2)} Best Salary: ${best.toFixed(2)}`;
        
        bestRestaurant.textContent = restaurantOutput;
        workersElement.textContent = resultText;
    }
}
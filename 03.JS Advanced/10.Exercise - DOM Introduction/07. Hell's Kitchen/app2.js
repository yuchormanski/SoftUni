function solve() {
    const inputElement = document.getElementById('inputs');
    const textArea = inputElement.children[1];
    const button = document.getElementById('btnSend');
    const bestRestaurant = document.getElementById('bestRestaurant').children[2];

    button.addEventListener('click', getData);
    

    function getData(event){
        const data = JSON.parse(textArea.value);
        let bestAvg = 0;
        let bestName = '';
        

        // creating objects
        const restaurants = {};
    
        for(let line of data){
            let [eatery, ...rest] = line.split(' - ');
            let workers = rest.join('').split(', ');
            if(!restaurants[eatery]){
                restaurants[eatery] = {}
                };
    
            for(let personData of workers){
                let [name, salary] = personData.split(' ');
                salary = Number(salary)
                 
                if(!restaurants[eatery][name]){
                    restaurants[eatery][name] = 0;
                }
                restaurants[eatery][name] += salary;
            }
            let allSums = Object.values(restaurants[eatery]);
            let totalAverage = (allSums.reduce((acc,x) =>(acc + x),0) /allSums.length).toFixed(2);

            if(Number(totalAverage) > bestAvg){
                bestAvg = Number(totalAverage);
                bestName = eatery;
            }
        }  
        // end creating objects
        let restBestSalary = Object.values(restaurants[bestName]);
        let best = Math.max(...restBestSalary)

        bestRestaurant.textContent = `Name: ${bestName} Average Salary: ${bestAvg} Best Salary: ${best}`
    }
}
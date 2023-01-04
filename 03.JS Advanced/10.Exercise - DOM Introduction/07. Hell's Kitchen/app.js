function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);


   function onClick() {
      let inputElement = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currentAvgSalary = 0;
      let bestName = '';
      let bestSalary = 0;
      const output = {};


      for (let line of inputElement) {
         let restInfo = line.split(' - ');
         let restName = restInfo[0];
         let workersData = restInfo[1].split(', ');

         for (let worker of workersData) {
            let [name, salary] = worker.split(' ');
            if (!output[restName]) {
               output[restName] = {};
            }
            if (output[restName]) {
               output[restName][name] = Number(salary);
            }
         }

      }
      let entries = Object.entries(output);

      for (let entry of entries) {

         let key = entry[0];
         let values = Object.values(entry[1]);

         for (let salary of values) {
            totalSalary += salary;
         }
         avgSalary = totalSalary / values.length;
         if (avgSalary > currentAvgSalary) {
            currentAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }
      let result = Object.entries(output[bestName]).sort((a,b) => b[1] - a[1]);
      let print = '';

      result.forEach()
console.log(result);
   }
}
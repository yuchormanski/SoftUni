/* Company Users
Write a function, which keeps the information about companies and their employees. 
You will receive an array of strings containing the company name and employee's id. 
Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
When you finish reading data, order the companies by their name in ascending order. 
Print the company name and each employee's id in the following format:
{companyName}
-- {id1}
-- {id2}
-- {idN}
Input / Constraints
The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
The input always will be valid.
 */

function companyUsers(data) {
    // create empty object
    let companiesInfo = {};
    for (let line of data) {
        let [company, userID] = line.split(' -> ');
        // IF don't exist - create key
        if (!companiesInfo[company]) {
            companiesInfo[company] = []
        }
        // check for equal value
        if (!companiesInfo[company].includes(userID)) {
            companiesInfo[company].push(userID);
        }
    }
    //sort object keys a-b
    let sortedCompanies = Object.keys(companiesInfo).sort((a, b) => a.localeCompare(b));

    //print result by sorted keys
    for (let currentComp of sortedCompanies) {
        console.log(currentComp);
        for(let user of companiesInfo[currentComp]){
            console.log(`-- ${user}`); 
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
//     ]);
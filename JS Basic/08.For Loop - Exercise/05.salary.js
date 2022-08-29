function sites(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    // input.length - дължината на масива, без да се конкретизира с точна цифра

    for (let index = 2; index < input.length; index++) { // Index идва от индекса в масива. Взима втори индекс 
        let currentTab = input[index];

        switch (currentTab) {
            case "Facebook":
                salary = salary - 150;
                break;
            case "Instagram":
                salary = salary - 100;
                break;
            case "Reddit":
                salary = salary - 50;
                break;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }

    if (salary > 0) {
        console.log(salary);
    }
}
sites(["10", "750",    "Facebook",    "Dev.bg",    "Instagram",    "Facebook",    "Reddit",    "Facebook",    "Facebook"])



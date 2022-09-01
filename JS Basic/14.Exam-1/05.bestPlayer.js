function bestPlayer(input) {
    let bestPlayer = '';
    let goals = 0;
    let i = 0;
    let next = input[i];
    while (next !== "END") {
        let player = next;
        next = Number(input[++i]);
        let currentGoals = next;
        currentGoals > goals ? (bestPlayer = player, goals = currentGoals) : null;
        next = input[++i];
        if (goals >= 10) {
            break;
        }
    }
    console.log(`${bestPlayer} is the best player!`);
    goals >= 3 ? console.log(`He has scored ${goals} goals and made a hat-trick !!!`) : console.log(`He has scored ${goals} goals.`);
}
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"])

/**
 Задача 5. Най-добър играч 
Пепи иска да напишете програма, чрез която да разбере кой е най-добрият играч от световното първенство.
 Информацията, която получавате ще бъде играч и колко гола е отбелязал. 
 От вас се иска да отпечатате кой е играчът с най-много голове и дали е направил хет-трик.
Хет-трик е, когато футболистът е вкарал 3 или повече гола. 
Ако футболист е вкарал 10 или повече гола, програмата трябва да спре.

Вход
От конзолата се четат по два реда до въвеждане на команда "END":
•	Име на играч – текст
•	Брой вкарани голове  – цяло положително число в интервала [1 … 10000]
Изход
На конзолата да се отпечатат 2 реда :
•	На първия ред:
          "{име на играч} is the best player!"
•	На втория ред :
o	 Ако най-добрият футболист е направил хет-трик:
              "He has scored {брой голове} goals and made a hat-trick !!!"
o	Ако най-добрият футболист НЕ е направил хет-трик:
                          "He has scored {брой голове} goals."
Примерен вход и изход

(["Neymar","2","Ronaldo","1","Messi","3","END"])
Messi is the best player!
He has scored 3 goals and made a hat-trick !!!

(["Silva","5","Harry Kane","10"])
Harry Kane is the best player!
He has scored 10 goals and made a hat-trick !!!

(["Petrov","2","Drogba","11"])
Drogba is the best player!
He has scored 11 goals and made a hat-trick !!!

(["Rooney","1","Junior","2","Paolinio","2","END"])
Junior is the best player!
He has scored 2 goals.

(["Zidane","1","Felipe","2","Johnson","4","END"])
Johnson is the best player!
He has scored 4 goals and made a hat-trick !!!
 */
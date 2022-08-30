function onTimeForTheExam(input) {
    let examTimeH = Number(input[0]);
    let examTimeM = Number(input[1]);
    let arrivalTimeH = Number(input[2]);
    let arrivalTimeM = Number(input[3]);
    let examTime = examTimeH * 60 + examTimeM;
    let arrivalTime = arrivalTimeH * 60 + arrivalTimeM;
    let time = 0;
    if (examTime > arrivalTime && examTime - 30 > arrivalTime) {
        if (examTime - arrivalTime > 59) {
            if ((examTime - arrivalTime) % 60 > 9) {
                time = `${Math.trunc((examTime - arrivalTime) / 60)}:${(examTime - arrivalTime) % 60}`
            } else {
                time = `${Math.trunc((examTime - arrivalTime) / 60)}:0${(examTime - arrivalTime) % 60}`
            }
            console.log(`Early\n${time} hours before the start`);
        } else {
            time = `${(examTime - arrivalTime)}`;
            console.log(`Early\n${time} minutes before the start`);
        }
    } else if (examTime > arrivalTime && examTime - 30 <= arrivalTime) {
        if (examTime - arrivalTime > 59) {
            if ((examTime - arrivalTime) % 60 > 9) {
                time = `${Math.trunc((examTime - arrivalTime) / 60)}:${(examTime - arrivalTime) % 60}`
            } else {
                time = `${Math.trunc((examTime - arrivalTime) / 60)}:0${(examTime - arrivalTime) % 60}`
            }
            console.log(`On time\n${time} hours before the start`);
        } else {
            time = `${(examTime - arrivalTime)}`;
            console.log(`On time\n${time} minutes before the start`);
        }
    } else if (examTime === arrivalTime) {
        console.log(`On time`);
    } else if (arrivalTime > examTime) {
        if (arrivalTime - examTime > 59) {
            if ((arrivalTime - examTime) % 60 > 9) {
                time = `${Math.trunc((arrivalTime - examTime) / 60)}:${(arrivalTime - examTime) % 60}`
            } else {
                time = `${Math.trunc((arrivalTime - examTime) / 60)}:0${(arrivalTime - examTime) % 60}`
            }
            console.log(`Late\n${time} hours after the start`);
        } else {
            time = `${(arrivalTime - examTime)}`;
            console.log(`Late\n${time} minutes after the start`);
        }
    }
}
onTimeForTheExam(["9","00","10","30"])

/*
8.	Навреме за изпит
Студент трябва да отиде на изпит в определен час (например в 9:30 часа). 
Той идва в изпитната зала в даден час на пристигане (например 9:40). 
Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това. 
Ако е пристигнал по-рано повече от 30 минути, той е подранил. Ако е дошъл след часа на изпита, той е закъснял. 
Напишете функция, която получава време на изпит и време на пристигане
 и отпечатва дали студентът е дошъл навреме, дали е подранил или е закъснял 
 и с колко часа или минути е подранил или закъснял.
Вход
Приемат се 4 аргумента:
•	Първият съдържа час на изпита – цяло число от 0 до 23.
•	Вторият съдържа минута на изпита – цяло число от 0 до 59.
•	Третият съдържа час на пристигане – цяло число от 0 до 23.
•	Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.
Изход
На първият ред отпечатайте:
•	"Late", ако студентът пристига по-късно от часа на изпита.
•	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
•	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
•	"mm minutes before the start" за идване по-рано с по-малко от 1.
•	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
•	 "mm minutes after the start" за закъснение под час.
•	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".



Примерен вход и изход

Вход
(["9","30","9","50"])
Изход
Late
20 minutes after the start

Вход
(["9","00","8","30"])
Изход
On time
30 minutes before the start

Вход
(["9","00","10","30"])
Изход
Late
1:30 hours after the start

Вход
(["10","00","10","00"])
Изход
On time

Вход
(["14","00","13","55"])
Изход
On time
5 minutes before the start

Вход
(["11","30","10","55"])
Изход
Early
35 minutes before the start

(["16","00","15","00"])
Early
1:00 hours before the start

(["11","30","8","12"])
Early
3:18 hours before the start

(["11","30","12","29"])
Late
59 minutes after the start

*/
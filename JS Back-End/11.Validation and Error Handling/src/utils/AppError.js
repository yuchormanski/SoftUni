module.exports = class AppError {
    constructor(message, data = {}){ // data ако не се подаде ще бъде празен обект по подразбиране
        this.message = message;
        this.data = data;
    }

}
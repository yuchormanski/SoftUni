export const now = {
    year: new Date().getFullYear(),
    month: month(),
    day: day(),
    hours: hours(),
    minutes: minutes(),
    seconds: seconds()
}

function month() {
    if ((new Date().getMonth() + 1) < 10) {
        return `0${new Date().getMonth() + 1}`;
    } else {
        return new Date().getMonth() + 1;
    }
}
function day() {
    if (new Date().getDate() < 10) {
        return `0${new Date().getDate()}`;
    } else {
        return new Date().getDate();
    }
}

function hours() {
    if (new Date().getHours() < 10) {
        return `0${new Date().getHours()}`;
    } else {
        return new Date().getHours();
    }
}

function minutes() {
    if (new Date().getMinutes() < 10) {
        return `0${new Date().getMinutes()}`;
    } else {
        return new Date().getMinutes();
    }
}

function seconds() {
    if (new Date().getSeconds() < 10) {
        return `0${new Date().getSeconds()}`;
    } else {
        return new Date().getSeconds();
    }
}

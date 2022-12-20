function modernTimesOfHashTagRegEx(inputString) {
    inputString.match(/\#[A-Za-z]+/g).forEach((element) => console.log(element.slice(1)));
}
modernTimesOfHashTagRegEx('#Nowadays everyone uses # to #1jhk tag a #special word in #socialMedia');
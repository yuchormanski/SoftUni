var isEven = false;
var peshoUser = {
    name: "Pesho",
    age: 21,
};
var anotherUserList = [
    { firstName: "Ivan", id: 1 },
    { firstName: "Mitko", id: 2 },
    { firstName: "Maria", id: 3 },
];
anotherUserList.forEach(function (user) {
    //
    console.log("".concat(user.id, ": ").concat(user.firstName));
});

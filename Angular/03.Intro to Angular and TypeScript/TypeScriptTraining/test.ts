let isEven: boolean = false;

// типовете се използват за по-прости структури, които не се наследяват
type User = {
  name: string;
  age: number;
};

interface AnotherUser {
  firstName: string;
  id: number;
}

const peshoUser = {
  name: "Pesho",
  age: 21,
} as User;

const anotherUserList = [
  { firstName: "Ivan", id: 1 },
  { firstName: "Mitko", id: 2 },
  { firstName: "Maria", id: 3 },
] as AnotherUser[];

anotherUserList.forEach((user) => {
  //
  console.log(`${user.id}: ${user.firstName}`);
});

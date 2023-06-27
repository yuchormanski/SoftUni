import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  toggle: boolean = false;

  // v.1
  // inputValue: string;
  // constructor() {
  //   this.inputValue = 'Hello';
  // }

  // v.2
  inputValue: string = 'Hello';

  activeUsers = [
    { name: 'Pesho', age: 21 },
    { name: 'Misho', age: 23 },
    { name: 'Mimi', age: 25 },
    { name: 'Gosho', age: 30 },
  ];

  // функцията е от тип void
  // ако функцията не връща нищо е void, иначе - string
  // ако е нужен ивент
  clickThis(event: Event): void {
    console.log({ event });
    this.toggle = !this.toggle;
  }
}

import { Component } from '@angular/core';
import { User } from './type/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-app';

  users: User[] = [
    { name: 'Ivan', age: 12 },
    { name: 'Mitko', age: 2 },
    { name: 'Pesho', age: 32 },
    { name: 'Penka', age: 14 },
  ];
}

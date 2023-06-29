import { Component, Input } from '@angular/core';
import { User } from '../type/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input() users: User[] = [];
}

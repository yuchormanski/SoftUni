import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  usersList: User[] = [];
  hasUsers: boolean = false;

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.usersList = users;
      this.hasUsers = true;
      // console.log(this.usersList);
    });
  }
}

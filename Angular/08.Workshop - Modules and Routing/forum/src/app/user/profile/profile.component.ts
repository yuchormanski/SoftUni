import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private userService: UserService) {}

  get userEmail(): string {
    return this.userService.user?.email || '';
  }
  get firstName(): string {
    return this.userService.user?.firstName || '';
  }
}

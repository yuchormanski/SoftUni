import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  constructor(private userService: UserService, private router: Router) {}

  get userEmail(): string {
    return this.userService.user?.email || '';
  }
  get firstName(): string {
    return this.userService.user?.firstName || '';
  }
  get tel(): string {
    return this.userService.user?.phoneNumber || '';
  }
}

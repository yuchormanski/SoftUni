import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  isEditMode: boolean = false;
  minLengthCount: number = 5;
  profileData: User | undefined;

  // form = this.fb.group({
  //   username: ['user1'],
  //   email: ['email1'],
  //   phoneNumber: ['tel1'],
  // });

  form = this.fb.group({
    firstName: [
      '',
      [Validators.required, Validators.minLength(this.minLengthCount)],
    ],
    email: [
      '',
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
    phoneNumber: [''],
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  get userEmail(): string {
    return this.userService.user?.email || '';
  }
  get firstName(): string {
    return this.userService.user?.firstName || '';
  }

  get tel(): string {
    return this.userService.user?.phoneNumber || '';
  }

  toggleEdit(): void {
    // this.router.navigate(['/edit-profile']);
    this.isEditMode = !this.isEditMode;
  }

  saveProfile(): void {
    if (this.form.invalid) return;
    console.log(this.form.value);
    this.profileData = { ...this.form.value } as User;

    this.toggleEdit();
  }
}

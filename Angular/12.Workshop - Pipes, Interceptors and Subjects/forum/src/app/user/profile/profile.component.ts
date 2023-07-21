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
  //   tel: ['tel1'],
  // });

  form = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(this.minLengthCount)],
    ],
    email: [
      '',
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
    tel: [''],
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  get userEmail(): string {
    return this.userService.user?.email || '';
  }
  get username(): string {
    return this.userService.user?.username || '';
  }

  get tel(): string {
    return this.userService.user?.tel || '';
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

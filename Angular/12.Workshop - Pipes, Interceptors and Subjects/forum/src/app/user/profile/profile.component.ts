import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';
import { User } from 'src/app/types/user';
import { UserId } from 'src/app/types/user-id';
import { Profile } from 'src/app/types/Profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;
  minLengthCount: number = 5;

  profileDetails: Profile = {
    username: '',
    email: '',
    tel: '',
  };

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

  // get userEmail(): string {
  //   return this.userService.user?.email || '';
  // }
  // get username(): string {
  //   return this.userService.user?.username || '';
  // }

  // get tel(): string {
  //   return this.userService.user?.tel || '';
  // }

  ngOnInit(): void {
    // this.userService.getProfile().subscribe((user) => {
    //   const { username, email, tel } = user;
    //   this.profileDetails = { username, email, tel };
    // });
    const { username, email, tel } = this.userService.user!; //гарантирано е че ще има потребител с !
    this.profileDetails = { username, email, tel };

    //задаваме първоначални стойности на формата за редактиране
    this.form.setValue({
      username,
      email,
      tel,
    });
  }

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfile(): void {
    if (this.form.invalid) return;

    this.profileDetails = { ...this.form.value } as Profile;

    const { username, email, tel } = this.form.value;
    // const { username, email, tel } = this.profileDetails;  //same as above

    this.userService.updateProfile(username!, email!, tel!).subscribe(() => {
      this.toggleEdit();
    });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import {
  DEFAULT_EMAIL_DOMAINS,
  emailRegex,
} from 'src/app/shared/validators/constants';
import { matchPasswords } from 'src/app/shared/validators/match-passwords-validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // used for template driven forms
  // appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  minLengthCount: number = 5;

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
    passGroup: this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern('^[A-Za-z0-9]{5,}$'),
          ],
        ],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswords('password', 'rePassword')],
      }
    ),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }
    // const { username, email, password, rePassword, tel } = this.form.value; // взимаме си данните от формата
    const {
      username,
      email,
      tel,
      passGroup: { password, rePassword } = {},
    } = this.form.value; // взимаме си данните от формата, когато е от група

    this.userService
      .register(username!, email!, password!, rePassword!, tel!) //по тои начин се гарантира, че данните ще са валидни. По-нагоре има застраховка за това if(form.valid)
      .subscribe(() => {
        this.router.navigate(['/']); // прехвърля към началната страница
      });
  }
}

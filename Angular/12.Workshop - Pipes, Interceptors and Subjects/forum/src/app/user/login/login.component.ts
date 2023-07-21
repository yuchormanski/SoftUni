import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm): void {
    if (form.invalid) return; //ако формата е невалидна

    const { email, password } = form.value; // взимаме си данните от формата

    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/themes']);
    });
  }
}

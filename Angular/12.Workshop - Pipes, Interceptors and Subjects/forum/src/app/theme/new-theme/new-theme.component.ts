import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  constructor(private router: Router) {}

  postTheme(form: NgForm): void {
    if (form.invalid) return;

    console.log(form.value);
    form.reset();
    this.router.navigate(['/home']);
  }

  resetForm(form: NgForm): void {
    form.reset();
    this.router.navigate(['/home']);
  }
}

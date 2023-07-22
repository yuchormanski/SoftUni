import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  constructor(private router: Router, private apiService: ApiService) {}

  postTheme(form: NgForm): void {
    if (form.invalid) return;

    const { themeName, postText } = form.value;

    this.apiService.createTheme(themeName, postText).subscribe(() => {});

    console.log(form.value);
    // form.reset();
    this.router.navigate(['/themes']);
  }

  //reset form on cancel button
  resetForm(form: NgForm): void {
    form.reset();
    this.router.navigate(['/home']);
  }
}

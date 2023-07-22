import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  @ViewChild('loginForm') loginForm: NgForm | undefined; // използва се за viewChanges не е задължително

  //will be rendered only static content
  ngOnInit(): void {}

  //will render the final content with dynamic components
  ngAfterViewInit(): void {
    if (this.loginForm) {
      this.loginForm.form.valueChanges.subscribe(console.log); // използва се за viewChanges
    }
  }

  // v.1
  submitHandler(form: NgForm): void {
    const value: { email: string; password: string } = form.value; //описани са типовете за да не се прави ТИП

    // -----------------------

    // v.2 - друг начин да се вземе формата без да се подават параметри на callback функцията
    // @ViewChild('loginForm') loginForm: NgForm | undefined;
    // submitHandler(): void {
    // изисква проверка
    // if (!this.loginForm) return;
    // const form = this.loginForm;

    //ако формата е невалидна не я изпраща, не продължава
    if (form.invalid) {
      console.log('Invalid form');
      return;
    }

    //действията с данните от формата са тук
    console.log(form.value);

    //ресетване на формата
    form.reset();

    // ----
    //подаване на данни в полетата след изпращане на формата.
    // Ако се поставят празни стрингове я ресетва
    // form.setValue({ email: '111', password: '222' });

    this.router.navigate(['/home']);
  }
}
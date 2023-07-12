import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //will be rendered only static content
  ngOnInit(): void {}

  //will render the final content with dynamic components
  // ngAfterViewInit(): void {
  // }

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

    //ресетване на формата
    form.reset();

    // ----
    //подаване на данни в полетата след изпращане на формата.
    // Ако се поставят празни стрингове я ресетва
    // form.setValue({ email: '111', password: '222' });

    console.log(form.value);
  }
}

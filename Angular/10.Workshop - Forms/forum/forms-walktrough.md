1. импортва се FormsModule в парент модула. В случая е в USERS, защото в него са логин и регистер
2. в html темеплейта се добавя референция към формата #form="ngForm"
3. добавя се (ngSubmit)="login(form)" на формата
4. от другата страна на функцията се въвежда типа на получения аргумент
   login(form: NgForm): void{} - трябва да се импортне NgForm
5. input полетата трябва да съдържат ngModel, за да може да се предават данни
   5.5. ако се изисква полето да е попълнено - required
6. създава се референция към инпут полето #inputFieldName="ngModel"

7. създава се контейнер за валидациите на полето
   <ng-container \*ngIf="inputFieldName.touched"><!-- без \ -->
   <p class="error" \*ngIf="inputEmail.errors?.['required']"><!-- без \; необходимо за да се достъпи required пропъртито-->
   Email is required!
   </p>
   <p class="error">Email is not valid!</p>
   </ng-container>
8. създаваме директива за валидиране на email (ng g d 'name')
9. директивата имплементира Validator
10. в класа се имплементира validate
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return null;
    }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightOnMoveDirective } from './highlight-on-move.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MaxCountDirective } from './max-count.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightOnMoveDirective,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MaxCountDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Template Driven Form
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

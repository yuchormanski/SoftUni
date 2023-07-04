import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CoreModule, SharedModule, UserModule],
  exports: [HomeComponent],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DetailComponent } from '../home/detail/detail.component';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: 'home/:id', component: DetailComponent }]),
  ],
  exports: [UserListComponent],
})
export class UserModule {}

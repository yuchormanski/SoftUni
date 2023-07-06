import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserResolver } from './user-detail/user.detail.resolver';
import { AuthGuard } from './user-detail/user-detail.guard';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'user/list', component: UserListComponent },
      {
        path: 'user/detail/:id',
        resolve: { user: UserResolver },
        canActivate: [AuthGuard],
        component: UserDetailComponent,
      },
    ]),
  ],
  exports: [UserListComponent],
})
export class UserModule {}

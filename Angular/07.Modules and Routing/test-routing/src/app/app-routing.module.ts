import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
// import { UserListComponent } from './user/user-list/user-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user/list' },
  // { path: 'user/list', component: UserListComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorPageComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}

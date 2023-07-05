import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    GalleryComponent,
    ContactsComponent,
    AboutComponent,
    ErrorPageComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [GalleryComponent, ContactsComponent, AboutComponent],
})
export class PagesModule {}

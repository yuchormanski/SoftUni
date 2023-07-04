import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [GalleryComponent, ContactsComponent, AboutComponent],
  imports: [CommonModule],
  exports: [GalleryComponent, ContactsComponent, AboutComponent],
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorPageComponent],
  imports: [CommonModule, RouterModule],
  // Note: tells which components to be exported from this module
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}

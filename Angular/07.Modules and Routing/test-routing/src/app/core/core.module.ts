import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    GlobalLoaderComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [
    NavigationComponent,
    FooterComponent,
    GlobalLoaderComponent,
    HeaderComponent,
  ],
})
export class CoreModule {}

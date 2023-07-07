import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewThemeComponent } from './theme/new-theme/new-theme.component';
import { MainComponent } from './main/main.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  { path: 'home', component: HomeComponent },
  { path: 'themes', component: MainComponent },
  { path: 'add-theme', component: NewThemeComponent },
  // { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

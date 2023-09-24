import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  { path: 'about', loadChildren: () => import('./about-tech/about-tech.module').then(m => m.AboutTechModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

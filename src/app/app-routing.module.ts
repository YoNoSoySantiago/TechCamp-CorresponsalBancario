import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WithdrawPageComponent } from './pages/withdraw-page/withdraw-page.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'main'
  },
  {
    path:'main',
    component:MainPageComponent
  },
  {
    path:'withdraw/:id',
    component:WithdrawPageComponent
  },
  {
    path:'*',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

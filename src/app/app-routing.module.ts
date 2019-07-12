import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'ui-playground',
    loadChildren: './features/ui-playground/ui-playground.module#UiPlaygroundModule'
  },
  {
    path: 'financial',
    loadChildren: './features/financial/financial.module#FinancialModule'
  },
  {
    path: '**',
    redirectTo: 'ui-playground'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'ui-playground',
    loadChildren: () => import('./features/ui-playground/ui-playground.module').then(m => m.UiPlaygroundModule)
  },
  {
    path: 'financial',
    loadChildren: () => import('./features/financial/financial.module').then(m => m.FinancialModule)
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

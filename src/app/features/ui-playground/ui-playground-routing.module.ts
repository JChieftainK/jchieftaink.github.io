import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';

const routes: Routes = [
  {
    path: '',
    component: PuzzleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiPlaygroundRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiPlaygroundRoutingModule } from './ui-playground-routing.module';
import { PieceComponent } from './piece/piece.component';
import { PuzzleComponent } from './puzzle/puzzle.component';

@NgModule({
  declarations: [PieceComponent, PuzzleComponent],
  imports: [
    CommonModule,
    UiPlaygroundRoutingModule
  ]
})
export class UiPlaygroundModule { }

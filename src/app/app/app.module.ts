import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    BoardComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }

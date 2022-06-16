import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './filter.pipe';
import { FadeinDirective } from './fadein.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BoardComponent,
    ListComponent,
    FilterPipe,
    FadeinDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { BoardComponent } from './board/board.component';
import { SetUpComponent } from './set-up/set-up.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    BoardComponent,
    SetUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

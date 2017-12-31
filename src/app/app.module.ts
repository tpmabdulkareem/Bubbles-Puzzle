import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PuzzleGameComponent } from './puzzle-game/puzzle-game.component';



@NgModule({
  declarations: [
    AppComponent,PuzzleGameComponent
  ],
  imports: [
    BrowserModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
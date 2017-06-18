import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { GamesListComponent } from './games-list/games-list.component';

import 'hammerjs';

import { MdTabsModule, MdButtonModule, MdCheckboxModule, MdCardModule, MdChipsModule} from '@angular/material';
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    GamesListComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdTabsModule,
    MdChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

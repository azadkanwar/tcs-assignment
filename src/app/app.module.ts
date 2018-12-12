import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { SortNamePipe } from './sort-name.pipe';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    TimeAgoPipe,
    SortNamePipe,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrentUserService } from './services/current-user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

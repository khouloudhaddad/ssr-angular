import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrentUserService } from './services/current-user.service';
import { UsersTableModule } from './users-table/users-table.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserModule,
    AppRoutingModule,
    UsersTableModule,
  ],
  providers: [CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from './services/current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'angular-seo';

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.currentUserService.setCurrentUser();
  }

}

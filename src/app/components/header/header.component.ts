import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/users-table/services/users.service';
import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { SortingInterface } from 'src/app/users-table/types/sorting.interface';
import { UserInterface } from 'src/app/users-table/types/user.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  sorting: SortingInterface = {
    column: 'id',
    order: 'asc',
  };
  users: UserInterface[] = [];
  searchValue: string = '';
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });
  platformId: Object;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.platformId = platformId;
  }

  fetchData(): void {
    this.usersService
      .getUsers(this.sorting, this.searchValue)
      .subscribe((users) => {
        if (isPlatformServer(this.platformId)) {
          this.transferState.set<UserInterface[]>(
            makeStateKey('usersTable'),
            users
          );
        }
        this.users = users;
      });
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
}

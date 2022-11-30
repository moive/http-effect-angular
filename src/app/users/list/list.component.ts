import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user.model';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: IUser[] = [];
  loading: boolean = false;
  error: any = null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(loadUsers());
    // this.userService.getUsers().subscribe((users) => {
    //   console.log(users);
    //   this.users = users;
    // });
  }

  trackByFn(index: number, item: IUser): number {
    return item.id;
  }
}

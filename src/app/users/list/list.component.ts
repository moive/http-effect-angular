import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: IUser[] = [];
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }

  trackByFn(index: number, item: IUser): number {
    return item.id;
  }
}

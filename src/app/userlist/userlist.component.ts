import { Component, OnInit } from '@angular/core';
import { UserlistService } from './userlist.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  private userList;
  private count: number = 1;
  constructor(private userlistService: UserlistService) { }

  ngOnInit() {
    this.userlistService.getMembers().subscribe((result: any) => {
      this.userList = result.results;
    });
  }
  loadMoreUsers() {
    this.count += 1;
    this.userlistService.loadMoreUsers(this.count * 10).subscribe((result: any) => {
      this.userList = result.results;
    });
  }
}

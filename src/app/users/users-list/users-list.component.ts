import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService: UsersService) { }

  displayedColumns: string[] = ['id', 'username', 'password'];
  
  dataSource : any[] = [];

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(response => {
      this.dataSource = response;
    });
  }

}

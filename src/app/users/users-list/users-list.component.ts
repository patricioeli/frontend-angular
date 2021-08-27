import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @ViewChild('table') table: MatTable<User> | undefined;

  constructor(private userService: UsersService,
    private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['id', 'username', 'password', 'actions'];
  
  dataSource : any[] = [];

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(response => {
      this.dataSource = response;
    });
  }


  onDelete(row: User) {
    this.userService.deleteUser(row.id).subscribe(response => {
      this.dataSource.splice(this.dataSource.findIndex(x => x === row), 1);
      this.table?.renderRows();
      this.snackBar.open('El usuario fue eliminado correctamente', 'Cerrar', {duration: 3000});
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
    private userService: UsersService ) { }

  ngOnInit(): void {
  }

  submitUser(usersForm: FormGroup) {
    if (usersForm.valid) {
      const user: User = usersForm.value;
      this.userService.saveUser(user).subscribe(response => {
        this.snackBar.open('El usuario fue guardado correctamente', 'Cerrar', {duration: 3000});
      });
      usersForm.reset();
    } else {
      this.snackBar.open('Debe ingresar todos los campos', 'Cerrar', {duration: 3000});
    }
    
  }

}

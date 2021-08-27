import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  USER_URL = 'api/user';

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<any> {
    return this.http.post(this.USER_URL+'/save', user);
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.USER_URL+'/findAll');
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.USER_URL+'/delete?id='+id);
  }
}

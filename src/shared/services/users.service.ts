import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: any = environment.apiUrl

  constructor(
    private http: HttpClient,
    private router: Router) { }


  getUsers(pagenumber: number, pageSize: any) {
    return this.http.get(this.apiUrl + `/api/users?page=${pagenumber}&per_page=${pageSize}`);
  }
}

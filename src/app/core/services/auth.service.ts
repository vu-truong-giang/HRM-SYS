import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Component } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  template: `
    <button (click)="getProfile()">Test Profile</button>
  `
})
export class AuthService {
  
  private apiUrlV1 = environment.apiVersions.v1;
  private apiUrlV2 = environment.apiVersions.v2;
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.apiUrlV1}/auth/login`, data);
  }

  getProfile() {
    return this.http.get(`${this.apiUrlV1}/auth/profile`);
  }

  logout() {
    return this.http.post(`${this.apiUrlV1}/auth/logout`, {});
  }
}
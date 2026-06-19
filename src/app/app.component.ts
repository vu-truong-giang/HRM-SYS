import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HRM-SYS';
  constructor(private http: HttpClient){}

  test401(){
    this.http.get(`${environment.apiUrl}/test-401`).subscribe({
      next: (res) => {
        console.log("success", res)
      },
      error: (err) => {
        console.log("component recieves error", err)
      }
    });
  }
  test403() {
    this.http.get(`${environment.apiUrl}/test-403`).subscribe({
      next: res => console.log('Success:', res),
      error: err => console.log('Test 403 error:', err)
    });
  }

  test404() {
    this.http.get(`${environment.apiVersions.v1}/test-404`).subscribe({
      next: res => console.log('Success:', res),
      error: err => console.log('Test 404 error:', err)
    });
  }

  getProfile() {
    this.http.get('/api/v1/auth/profile').subscribe({
      next: res => {
        console.log('Profile:', res);
      },
      error: err => {
        console.log('Error:', err);
      }
    });
  }
}

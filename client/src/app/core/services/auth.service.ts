import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = environment.api + "auth/";

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(username: string, password: string, nextRoute="") {
    return new Promise<any>((resolve, reject) => {
      this.http.post(this.rootUrl+'login',{username,password}).subscribe({
        next: (v:any) => {
          console.log(v);
          localStorage.setItem("token", v["token"]);
          resolve(v)
        },
        error: (e) => reject(e),
        complete: () => { this.router.navigate([nextRoute]); }
      })
    })
  }

  signup(username: string, password: string, nextRoute="") {
    return new Promise<any>((resolve, reject) => {
      this.http.post(this.rootUrl+'signup',{username,password}).subscribe({
        next: (v:any) => {
          console.log(v);
          localStorage.setItem("token", v["token"]);
          resolve(v)
        },
        error: (e) => reject(e),
        complete: () => { this.router.navigate([nextRoute]); }
      })
    })
  }

  logout(nextRoute="/auth/login") {
    return new Promise<any>((resolve, reject) => {
      localStorage.removeItem("token");
      this.router.navigate([nextRoute]);
      resolve("Logged out!");
    })
  }

  isLoggedIn() {
    // Check if "token" key is set in localStorage
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined;
  }

}

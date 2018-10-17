import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  authToken: string
  constructor() { }

  authenticate(user: string, password: string) {
    if(user === "user" && password === "user"){
      this.authToken = '123456'
      sessionStorage.setItem('filmsToken', this.authToken);
    }
  }

  isAuthenticated(): boolean{
    return sessionStorage.getItem('filmsToken') === this.authToken
  }
} 
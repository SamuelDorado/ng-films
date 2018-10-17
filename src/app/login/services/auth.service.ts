import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  constructor() { }

  authenticate(user: string, password: string) {
    if(user === "user" && password === "user"){
      const authToken = '123456'
      sessionStorage.setItem('filmsToken', authToken);
    }
  }

  isAuthenticated(): boolean{
    return sessionStorage.getItem('filmsToken') === '123456'
  }
} 
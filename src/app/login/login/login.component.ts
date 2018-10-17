import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string
  password: string
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    if (this.user && this.password){
        this.authService.authenticate(this.user, this.password)
        this.router.navigate(['/films'])
    }else {
      alert('Introduce Usuario y/o Contraseña!!')
    }
  }

  ngOnDestroy(){
  }
}

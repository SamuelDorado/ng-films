import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/films'])
    }
    this.authForm = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login(){
    if (this.authForm.valid){
        this.authService.authenticate(this.authForm.get('user').value, this.authForm.get('password').value)
        this.router.navigate(['/films'])
    }
  }

  ngOnDestroy(){
  }
}

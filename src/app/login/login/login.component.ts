import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscription: Subscription
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  redirectTo(){
    this.subscription = this.router.events.pipe(filter((e)=> e instanceof NavigationStart)).subscribe((routerEvent)=> {
      console.log(routerEvent)
    })
    this.router.navigate(['films'])
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}

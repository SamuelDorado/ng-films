import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('',Validators.required),
      surname: new FormControl('',Validators.required),
      phone: new FormControl('',{validators:Validators.maxLength(9), updateOn: 'change' }),
      mail: new FormControl('',[Validators.required,Validators.email]),
      gdprOk: new FormControl(''),
      address: new FormGroup({
        city: new FormControl('',Validators.required),
        postalCode: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5)])
      })
    })
  }

}

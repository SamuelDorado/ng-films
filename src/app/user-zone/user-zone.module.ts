import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserZoneRoutingModule } from './user-zone-routing.module';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserZoneRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UserComponent]
})
export class UserZoneModule { }

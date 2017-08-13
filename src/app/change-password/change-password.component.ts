import { PasswordValidators } from './password.validators';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form;
  constructor(fb:FormBuilder) {
    this.form=fb.group({
      oldPassword:['',Validators.required,PasswordValidators.validOldPassword],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    },{
      validator:PasswordValidators.passwordMatch
    });
   }

   get oldP()
   {
     return this.form.get("oldPassword");
   }
  
   get newP()
   {
     return this.form.get("newPassword");
   }
  
   get confirmP()
   {
     return this.form.get("confirmPassword");
   }

}

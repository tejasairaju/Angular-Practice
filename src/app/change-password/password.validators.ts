import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PasswordValidators
{
    static validOldPassword(ctrl:AbstractControl):Promise <ValidationErrors| null>
    {
        return new Promise((resolve,reject)=>{
            if(ctrl.value!='1234')
                {
                    resolve({invalidOldPassword:true});
                }
                resolve(null);
        });
    }
    static passwordMatch(control:AbstractControl):ValidationErrors| null
    {
        let newP=control.get("newPassword");
        let confirmP=control.get("confirmPassword");
        if(newP.value != confirmP.value)
        {
            return { passwordMismatch:true};
        }
        return null;
    }
}
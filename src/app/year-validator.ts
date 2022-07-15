import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function rangeDateValidator(min: number, max: number): ValidatorFn {

    return (control: AbstractControl) => {
        
        let valid = false;


        if (control != undefined && control.value > min && control.value < max) {
            valid = true
        }

        const errors = { dateInvalid: { rules: 'The date must be between ' + min + ' and ' + max } }

        if (valid === false) return errors
        else return null
    }

}
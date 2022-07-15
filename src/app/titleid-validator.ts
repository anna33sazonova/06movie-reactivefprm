import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isRequiredValidator(formControlName1: string, formControlName2: string): ValidatorFn {
//on a passé la fonction isRequiredValidator avec les paramètres formControl qui vont representer formControlName id et title dans le tableau html
// on peut les nommer comment on veut, on passe les paramètres de fonction à côté de composant.ts

    return (formGroup: AbstractControl) => {
        // on déclare la variable valid, on la nomme quand on veut, et lui donne la valeur par défaut false
        // on la déclare pour utiliser dans le boucle IF, la valeur de valid change, si les valeurs des controlgroupname ne correspondent pas à la condition 
    

        let valid = false;

        if (formGroup.get(formControlName1)?.value != '' || formGroup.get(formControlName2)?.value != '') {
            valid = true
        }
        
             // affichage des erreurs
        const errors = { fieldRequired: { rules: 'One of the fields is required ' + formControlName1 + ' and ' + formControlName2 } }
   

        if (valid === false) return errors
        else return null
        // dans ce cas là on affiche les erreurs
    }
}
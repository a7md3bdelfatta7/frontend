import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{

    public static cannotcontainspace(control:AbstractControl) : ValidationErrors | null{
        
        if((control.value as String).indexOf(' ') != -1){
            return {cannotContainSpace: true};
        }

        return null;
    }

    public static shouldBeUnique(control:AbstractControl) : Promise<ValidationErrors|null>{
            return new Promise((resolver,rejected)=>{
                setTimeout(()=>{
                    if(control.value=='mosh')
                        resolver({shouldBeUnique:true});
                    else
                        resolver(null);
                    
                },2000);
            });
    }


}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

        this.inscriptionForm = this.fb.group({
      name: [
        '', 
        [Validators.required, Validators.maxLength(24)]
      ],
      firstName: [
        '',
        [Validators.required, Validators.maxLength(24)]
      ],
      adress: [
        '',
        [Validators.required, Validators.maxLength(100)]
      ],
      email: [
        '',
        Validators.email
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(8)]
      ],
      passwordConfirmation: [
        '',
        Validators.required
      ]
    },
    {
      validator: this.passwordConfirmation
    });
  }

   private passwordConfirmation(group:FormGroup):{[key:string]:any} {
    if(group.get('password').value === group.get('passwordConfirmation').value){
      return null;
    }
    return{notSamePassword:true};
  }

  inscription(){
    console.log(this.inscriptionForm.value);
  }

}

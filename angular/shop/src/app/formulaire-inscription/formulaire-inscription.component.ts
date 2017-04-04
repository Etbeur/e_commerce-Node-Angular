import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.css']
})
export class FormulaireInscriptionComponent implements OnInit {
  
  // Creation d'un FormGroup afin de pouvoir gérer plusieurs FormControl en même temps
  inscriptionForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.inscriptionForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(8)]
      ],
      passwordConfirmation: [
        '',
        [Validators.required]
      ],
    },
    {
      validator: this.passwordConfirmation
    });
  }

  private passwordConfirmation(group:FormGroup):{[key:string]:any}{
    if(group.get('password').value === group.get('passwordConfirmation').value){
      return null;
    }
    return{notSamePassword:true}
  }

  private inscription(){
    if(this.inscriptionForm.valid === true){
    console.log('inscription réussie');
    }else{
      console.log('erreur, inscription raté');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexionForm:FormGroup;
  returnHome:string;

  constructor(private fb:FormBuilder) { 
    this.returnHome = "Home";
  }

  ngOnInit() {

        this.connexionForm = this.fb.group({
      email: [
        '',
        Validators.email
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(8)]
      ]
    })
  }

  connexion(){
    console.log(this.connexionForm.value);
  }
  
}

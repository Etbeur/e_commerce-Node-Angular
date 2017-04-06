import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inscription:string;
  connexion:string;

  constructor() {
    this.inscription = "Inscription";
    this.connexion = "Connexion";
  }

  ngOnInit() {
  }

}

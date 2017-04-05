import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  createBy:string;
  gitHub:string;

  constructor() { 
    this.createBy = "https://etbeur.github.io/";
  }

  ngOnInit() {
  }

}

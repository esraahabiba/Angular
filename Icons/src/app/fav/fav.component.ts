import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  isfavorit : boolean = false ; 
  constructor() { }

  ngOnInit() {
  }
  onfclick(){
    this.isfavorit = !this.isfavorit ; 
  }
}

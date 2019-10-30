import { Component, OnInit , NgModule } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html' ,
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {

 res:Number;
 
  constructor() {}

  ngOnInit() {}

  sum (num1,num2) {

  this.res= Number(this.num1)+ Number(this.num2)


console.log(this.res);


}

}


 
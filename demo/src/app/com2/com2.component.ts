import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.css']
})
export class Com2Component implements OnInit {

  constructor(private router: Router,  private route: ActivatedRoute) { }
  res :Number;
  ngOnInit() {
    this.res =Number( this.route.snapshot.paramMap.get("res"));
  }
  res2 : Number 
  number1 :Number 
  number2 :Number 
   
  
  minus(num1 :Number,num2:Number){
    this.number1=num1
    this.number2=num2
  this.res2 = Number(this.number1)+Number(this.number2);
  console.log(this.res2)
  
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router"; 
@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.css']
})


export class Com1Component implements OnInit {
  constructor(private router: Router ,private route: ActivatedRoute){}
  res : Number 
  ngOnInit(): void {
    this.res = Number(this.route.snapshot.paramMap.get("com1")) ; 
  }


number1 :Number 
number2 :Number 
 

sum(num1 :Number,num2:Number){
  this.number1=num1
  this.number2=num2
this.res = Number(this.number1)+Number(this.number2);
console.log(this.res)
this.router.navigate(['/com2',this.res]);
}
}

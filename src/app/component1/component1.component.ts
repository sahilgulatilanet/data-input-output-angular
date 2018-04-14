import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  com2Value = "sahil";
  sum;
  constructor() { }
  //@Input('abc') data1 : string
  ngOnInit() {
    // this.data1 = "Hii";
    //console.log('data', this.data1);
  }
  printst(data){
    this.sum=data;
    console.log(this.sum);
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input('com2') data2: string;

  @Output('event2') eventData = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log('com2', this.data2);
  }
  onClk(data){
    this.eventData.emit(data);
  }

}

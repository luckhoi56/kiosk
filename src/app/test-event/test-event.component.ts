import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import {EventChildComponent} from '../event-child/event-child.component'
@Component({
  selector: 'app-test-event',
  templateUrl: './test-event.component.html',
  styleUrls: ['./test-event.component.css']
})
export class TestEventComponent implements OnInit {
  public m_city_from:string = ""
  public m_city_to:any
  public show = false
  public data = JSON.parse(`{
    "from": [
      {
        "name": "Seattle",
        "to": [
          { "name": "Los Angeles", "price": 200 },
      { "name": "Houston", "price": 239 },
          { "name": "St. Louis", "price": 178 }
        ]
      },
      {
        "name": "Los Angeles",
        "to": [
          { "name": "Seattle", "price": 200 },
      { "name": "Houston", "price": 211 },
      { "name": "St. Louis", "price": 148 }
        ]
      },
      {
        "name": "St. Louis",
        "to": [
      { "name": "Seattle", "price": 199 },
          { "name": "Los Angeles", "price": 219 },
      { "name": "New York", "price": 215 },
      { "name": "Houston", "price": 201 },
      { "name": "Tampa", "price": 298 }
        ]
      },
      {
        "name": "Houston",
        "to": [
      { "name": "Seattle", "price": 197 },
          { "name": "Los Angeles", "price": 215 },
      { "name": "New York", "price": 220 },
      { "name": "St. Louis", "price": 211 },
      { "name": "Tampa", "price": 310 }
        ]
      },
      {
        "name": "New York",
        "to": [
      { "name": "Houston", "price": 208 },
      { "name": "St. Louis", "price": 178 },
      { "name": "Tampa", "price": 240 }
        ]
      },
      {
        "name": "Tampa",
        "to": [
      { "name": "New York", "price": 200 },
      { "name": "St. Louis", "price": 199 },
      { "name": "Houston", "price": 250 }
        ] 
      }
    ]
  }`);
  
  
    
  
  @Output() button = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onItemChange(value){
    console.log("Value is: ", value)
    this.m_city_from = value
    
    this.show = true
    for(let city of this.data.from){
      if(city.name==value)
        this.m_city_to = city.to
    }
  }
}

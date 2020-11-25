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
  public m_current_city:any=""
  public m_images:any=[
    {
      "name":"Los Angeles",
      "src": "https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "information":"this is one"
      
    },
    {
      "name":"St. Louis",
      "src": "https://images.unsplash.com/photo-1605842581240-a0e2527d200b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "information":"this is 2"
    },
    {
      "name":"Houston",
      "src": "https://images.unsplash.com/photo-1603538794058-7471d7648902?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "information":"this is 3"
    },
    {
      "name":"Seattle",
      "src": "https://images.unsplash.com/photo-1605960502123-1c4f3cfaec08?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "information":"this is 4"
    },
    {
      "name":"New York",
      "src": "https://images.unsplash.com/photo-1605699429575-9f016e477b48?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "information":"this is 5"
    },
    {
      "name":"Tampa",
      "src": "https://images.unsplash.com/photo-1603879493311-a977e9e5aa65?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "information":"this is 6"
    },
  ]
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
      { "name": "Seattle", "price": 199, "src":"https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" },
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
   getImage(cityName):string{
    for(let i of this.m_images){
      if(i.name==cityName)
        return i.src
    }
  }
 
}

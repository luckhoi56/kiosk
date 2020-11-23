import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sea',
  templateUrl: './sea.component.html',
  styleUrls: ['./sea.component.css']
})
export class SeaComponent implements OnInit {
  showItem:boolean = false
  people: any =[
    {name:"Bob", birthMonth: "Jan"}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  toggleShowItem():void {
    this.showItem = !this.showItem
    console.log("in toggle")
  }

}

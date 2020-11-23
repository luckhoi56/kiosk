/*
There is an element that can be show and hidden via butting
by using ngIf
-ngFor is used to render the data that you create with at least
5 elements




*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-button',
  template:`
    <button type="button" (click)="toggleShowData()">Toggle Data

    </button>
    <div *ngIf="showItem">
    <div *ngFor="let person of people">
          {{person.name}}
        </div>
    </div>
  `
})
export class TestButtonComponent implements OnInit {
  showItem:boolean=false
  /*
  people: any=[
    {name:"Bob",birthMonth:"Jan",City:"Los Angeles",Street:"Levering",Planet:"Earth"},
    {name:"Jane",birthMonth:"Feb",City:"Westwood",Street:"Kelton",Planet:"Mar"}
  ]
  */
 people: any=[
  {name:"Bob",birthMonth:"Jan",City:"Los Angeles",Street:"Levering",Planet:"Earth"},
  {name:"Jane",birthMonth:"Feb",City:"Westwood",Street:"Kelton",Planet:"Mar"}
]
  constructor() { }

  ngOnInit(): void {
  }

  toggleShowData():void{
    this.showItem = !this.showItem
    console.log("toggle in test button component")
  }
}

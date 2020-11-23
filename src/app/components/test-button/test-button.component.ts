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
    <div>
    <input type="checkbox" (click)="toggleShowData()">Toggle Data
    </div>
    
    <div *ngIf="showItem">
        <div *ngFor="let person of people">
          {{person.name}} {{person.birthMonth}} {{person.City}} {{person.Street}} {{person.Planet}}
        </div>
    </div>

    <form>
        <div *ngFor="let option of options">
        <input type="radio" name={{option.name}} value={{option.value}}>{{option.text}}
        </div>
        <input type="submit" value="Submit">

    </form>
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

options:any=[
  {name:"choice",value:"yes",text:"Yes"},
  {name:"choice",value:"no",text:"No"}
]
  constructor() { }

  ngOnInit(): void {
  }

  toggleShowData():void{
    this.showItem = !this.showItem
    console.log("toggle in test button component")
  }
}



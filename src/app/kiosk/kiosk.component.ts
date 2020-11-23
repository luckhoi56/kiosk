import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kiosk',
  template:
  `
  <form>
    <div *ngFor="let option of options">
      <label for={{option.name}}>{{option.text}}</label><br>
      <input type="text" id={{option.name}} >
    </div>
  </form>
  `
})
export class KioskComponent  {
  constructor() { }

  ngOnInit(): void {
  }
  options:any=[
    {name:"fname",text:"Your full name"},
    {name:"bday",text:"Birth Date"},
    {name:"email",text:"Your Email"}
  ]
 

}

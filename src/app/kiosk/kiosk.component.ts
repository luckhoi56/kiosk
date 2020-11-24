import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.css']
})
export class KioskComponent  {
  public fname:string=""
  public lname:string=""
  public bday:string=""
  constructor() { }

  ngOnInit(): void {
  }
  public options:any=[
    {name:"fname",text:"Your full name",value:"1"},
    {name:"bday",text:"Birth Date",value:"2"},
    {name:"email",text:"Your Email",value:"3"}
  ]
 

}

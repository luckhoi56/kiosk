import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.css']
})
export class KioskComponent  {
  public confirm_state:boolean = false
  constructor() { }
  ngOnInit(): void {
  }
  public options:any=[
    {name:"fname",text:"Your full name",value:""},
    {name:"bday",text:"Birth Date",value:""},
    {name:"email",text:"Your Email",value:""}
  ]
  
 m_confirm():void{
   this.confirm_state = true
   console.log("in m_confirm")
 }
 m_unconfirm():void{
   this.confirm_state = false
 }
 m_submit():void{
   for(let option of this.options)
    option.value=""
 }

}

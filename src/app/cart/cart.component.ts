import { getUrlScheme } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  //public sum : number = getSum();
  
  

  ngOnInit(): void {
  }
  changeQuantity(item):void{
    
    if(item.quantity > 0) item.quantity--
    console.log(item.quantity)
  }
  purchase():void{
  
    for(let i of this.messageService.messages.menu){
      i.quantity = 0
    }
  }
  /*
  getSum():number{
    let s = 0;
    for(let i of this.messageService.messages.menu){
      s = s + (i.quantity * i.price);
      console.log(this.sum)
      return s;
  }
  }
  */
}

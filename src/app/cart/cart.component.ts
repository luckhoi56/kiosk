import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }
  changeQuantity(item):void{
    
    if(item.quantity > 0) item.quantity--
    console.log(item.quantity)
  }
}

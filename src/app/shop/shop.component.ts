import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service'
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  changeQuantity(item):void{
    item.quantity++
    console.log(item.quantity)
  }
}

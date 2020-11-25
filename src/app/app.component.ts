import { Component } from '@angular/core';
import {MessageService} from './message.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //svelte
})
export class AppComponent {
  title = 'my-first-project';
  //constructor(private messae)
  //public text:string
  public products: any =[{}]
  public click(){
    

  }
}

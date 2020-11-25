import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: any ={"Beef Noodle": {"quantity":"0"},"Fried Rice":{"quantity":"0"},"Spring Rolls": {"quantity":"0"}}


  constructor() { }

  public addMessage(message: string){
    this.messages.push(message)
  }
  public getMessages(): string[]{
    return this.messages
  }
}

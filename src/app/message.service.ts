import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages: any =JSON.parse(`{
    "menu": [
      {
        "name": "Beef Noodle",
        "quantity":"0"
      },
      {
        "name": "Spring Rolls",
        "quantity":"0"
      },
      {
        "name": "Fried Rice",
        "quantity":"0"
      }

    ] }
`)


  constructor() { }

  public addMessage(message: string){
    this.messages.push(message)
  }
  public getMessages(): string[]{
    return this.messages
  }
}

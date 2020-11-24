import { Component, EventEmitter, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-event-child',
  templateUrl: './event-child.component.html',
  styleUrls: ['./event-child.component.css']
})
export class EventChildComponent implements OnInit {
  @Output() button = new EventEmitter<string>()
  constructor() { }
  buttonClicked(){
    this.button.emit("Button Clicked")
  }
  ngOnInit(): void {
  }

}

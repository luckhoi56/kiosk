import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SeaComponent } from './search/sea/sea.component';
import { TestButtonComponent } from './components/test-button/test-button.component';
import { FormsModule } from '@angular/forms';
import { KioskComponent } from './kiosk/kiosk.component';
import { TestEventComponent } from './test-event/test-event.component';
import { HelloComponent } from './hello/hello.component';
import { EventChildComponent } from './event-child/event-child.component';
import { MServiceComponent } from './m-service/m-service.component';

@NgModule({
  declarations: [
    AppComponent,

    SeaComponent,

    TestButtonComponent,

    KioskComponent,

    TestEventComponent,

    HelloComponent,

    EventChildComponent,

    MServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //need to use ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './counter/counter.service'; // Import the CounterService

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    CounterService, // Provide the CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

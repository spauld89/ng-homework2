import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SocnetGroupComponent } from './socnet-group/socnet-group.component';
import { MainListComponent } from './main-list/main-list.component';
import { HotelFilterPipe } from './hotel-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    SocnetGroupComponent,
    MainListComponent,
    HotelFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

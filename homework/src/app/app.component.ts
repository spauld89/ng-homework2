import { Component } from '@angular/core';

@Component({
  selector: 'homework-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotel: Hotel;
  public setChosenHotel(hotel: Hotel): void{
    this.hotel = hotel;
  }

}

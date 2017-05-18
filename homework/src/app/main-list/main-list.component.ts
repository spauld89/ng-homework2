import { Component, EventEmitter, Output } from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'homework-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent {
  @Output()
  public onChoosingHotel: EventEmitter<Hotel> = new EventEmitter();
  public hotels = data;
  public stars;
  public chosenHotel: Hotel = this.hotels[0];
  public chooseHotel(hotel: Hotel): void{
    this.chosenHotel = hotel;
    this.onChoosingHotel.emit(hotel);
  }
  public filterByStars(stars: number, hotels: Hotel[]): void{
    if(stars != 0){
      this.stars = stars;
      let filteredHotels = hotels.filter((hotel: Hotel) => hotel.stars == stars);
      this.chooseHotel(filteredHotels[0]);
    } else {
      this.stars = null;
      this.chooseHotel(hotels[0]);
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.onChoosingHotel.emit(this.chosenHotel);
  }

}

import { Component } from '@angular/core';
import { hotels$ } from '../data';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'homework-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent {
  public hotels$: Observable<Hotel[]> = hotels$;
  public stars;
  public chosenHotel: Hotel;
  public chooseHotel(hotel: Hotel): void{
    this.chosenHotel = hotel;
  }
  public filterByStars(stars: number, hotels: Hotel[]): void{
    if(stars != 0){
      this.stars = stars;
    } else {
      this.stars = null;
    }
    let filteredHotels = hotels.filter((hotel: Hotel) => hotel.stars == stars);
    this.chosenHotel = filteredHotels[0];
  }
  constructor() { }

  ngOnInit() {
  }

}

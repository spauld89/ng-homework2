import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'homework-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  @Input()
  public hotel: Hotel;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'homework-socnet-group',
  templateUrl: './socnet-group.component.html',
  styleUrls: ['./socnet-group.component.css']
})
export class SocnetGroupComponent implements OnInit {
  @Input()
  public hotel: Hotel;
  constructor() { }

  ngOnInit() {
  }

}

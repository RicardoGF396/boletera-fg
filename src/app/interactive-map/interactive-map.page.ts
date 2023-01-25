import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.page.html',
  styleUrls: ['./interactive-map.page.scss'],
})
export class InteractiveMapPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public selectSeat($seat:any): void{
    console.log("dentro");
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {
  public params:any ;
  constructor(private activatedRoute:ActivatedRoute) {
    this.params = Object.assign({}, this.getParams());
  }

  ngOnInit() {
    console.log(this.params);
  }

  getParams() {
    return this.activatedRoute.snapshot.params;
  }
}

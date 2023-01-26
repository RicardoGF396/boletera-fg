import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {
  public params:any ;
  constructor(private activatedRoute:ActivatedRoute,
    private navParams: NavParams) {
      console.log(navParams.get('nombre'));
    console.log(navParams.get('apellidos'));
    console.log(navParams.get('locale'));
    this.params = Object.assign({}, this.getParams());
  }

  ngOnInit() {
    console.log(this.params);
  }

  getParams() {
    return this.activatedRoute.snapshot.params;
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  eventos: any = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getEventos().subscribe((res) => {
      console.log("RES", res);
      this.eventos = res;
    });
  }

  getEventos() {
    //peticion
    return this.http
      .get(
        'https://raw.githubusercontent.com/dantaex/ciudades_mexico/master/states_mexico.json'
      )
      .pipe(
        map(
          (
            res: any //se mapea
          ) => {
            return res.states;
          }
        )
      );
  }

}

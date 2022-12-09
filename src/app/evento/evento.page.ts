import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: 'evento.page.html',
  styleUrls: ['evento.page.scss']
})
export class EventoPage implements OnInit  {
  id: any;
  finalid: number=0;
  eventos: any = [];
  name: string='';
  ubicacion: string='';
  precio: string='';
  constructor( private activatedRoute: ActivatedRoute,
    private http: HttpClient) {}
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.finalid = this.id - 1;

    this.getEvento().subscribe((res) => {
      // console.log("RES", res);
      this.eventos = res;
      this.name = this.eventos[this.id].name;
      this.ubicacion = this.eventos[this.id].shortname;
      this.precio = this.eventos[this.id].key;
      // console.log(this.name);
      

    });
    // console.log("id", this.id);
  }
  getEvento() {
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
            // return res;
          }
        )
      );
  }
}

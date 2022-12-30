import { Component,OnInit,ElementRef, ViewChild,AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import * as svgPanZoom from 'svg-pan-zoom';
@Component({
  selector: 'app-evento',
  templateUrl: 'evento.page.html',
  styleUrls: ['evento.page.scss']
})
export class EventoPage implements OnInit  {
  private panZoom!: SvgPanZoom.Instance;

  id: any;
  finalid: number=0;
  eventos: any = [];
  name: string='';
  ubicacion: string='';
  precio: string='';
  sliderOpt={
    zoom:{
      maxRatio:5
    }
  };
  constructor( private activatedRoute: ActivatedRoute,
    private http: HttpClient) {}
    @ViewChild('svg', {static: false}) svg!: ElementRef<SVGSVGElement>;
    ngAfterViewInit() {
      // console.log(this.svg.nativeElement);
     
    }
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


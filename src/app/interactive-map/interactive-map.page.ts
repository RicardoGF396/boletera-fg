import {Component,OnInit,ElementRef, ViewChild,AfterViewInit, Renderer2 } from '@angular/core';
import Swal from 'sweetalert2';
import { ModalController } from '@ionic/angular';
import { SectionPage } from '../section/section.page';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as svgPanZoom from 'svg-pan-zoom';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.page.html',
  styleUrls: ['./interactive-map.page.scss'],
})
export class InteractiveMapPage implements OnInit {
  private panZoom!: SvgPanZoom.Instance;
  id: any;
  finalid: number=0;
  eventos: any = [];
  name: string='';
  ubicacion: string='';
  precio: string='';
  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private renderer: Renderer2,
    public modalController: ModalController) {
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
  }

  selectSeat($seat:Event):void{
    let seat:any = $seat.target as HTMLElement;
    let section:any = seat.y;
    let text:any = "Usted esta en la seccion " + section ;
    Swal.fire({
      title : "Estos son tus asientos estas seguro de tu compra ?",
      text : text,
      heightAuto : true
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SectionPage,
      componentProps: {
        'svg': 'Aitor',
        'apellidos': 'Sánchez',
        'locale': 'es_ES'
      }
    });
    return await modal.present();
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

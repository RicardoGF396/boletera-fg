import { Component, OnInit ,ElementRef, ViewChild,AfterViewInit, Renderer2} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import * as svgPanZoom from 'svg-pan-zoom';
import { count } from 'console';

@Component({
  selector: 'app-plaza-toros',
  templateUrl: './plaza-toros.page.html',
  styleUrls: ['./plaza-toros.page.scss'],
})
export class PlazaTorosPage implements OnInit {
  private panZoom!: SvgPanZoom.Instance;


  public points224: any =[];
  public points222: any =[];
  public points220: any =[];
  public abc :any = [
    {
    letra : 'A',
    },
    {
    letra : 'B',
    },
    {
    letra : 'C',
    },
    {
    letra : 'D',
    },
    {
    letra : 'E',
    },
    {
    letra : 'F',
    },
    {
    letra : 'G',
    },
    {
    letra : 'H',
    },
    {
    letra : 'I',
    },
    {
    letra : 'J',
    },
    {
    letra : 'K',
    },
    {
    letra : 'L',
    },
    {
    letra : 'M',
    },
    {
    letra : 'N',
    },
    {
    letra : 'O',
    },
    {
    letra : 'P',
    },
    {
    letra : 'Q',
    },
    {
    letra : 'R',
    },
    {
    letra : 'S',
    },
    {
    letra : 'T',
    },
    {
    letra : 'U',
    },
    {
    letra : 'V',
    },
    {
    letra : 'W',
    },
    {
    letra : 'X',
    },
    {
    letra : 'Y',
    },
    {
    letra : 'Z',
    }
  ];
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
    private http: HttpClient,
    private renderer: Renderer2) { }

    @ViewChild('svg', {static: false}) svg!: ElementRef<SVGSVGElement>;

    @ViewChild('tooltip') tooltip!: ElementRef;
ngOnInit() {
//////////////////////////////// Inicio algoritmo seccion 224 ////////////////////////////////
  let cx_224 =  83.7;
  let cy_224 = 814.15;
  let count_224 = 30;
  let diferenciaX_224 = 0;
  let diferenciaY_224 = 0;
  for(let j = 1; j <= 14; j++){

    if (j >= 8){
      count_224 =28;
      cx_224 += 1.98;
      if (j ==14){
        cx_224 -= 0.2;
      }
    }
    if (j== 5 || j==6 || j==7 ){
      cx_224 -= 0.6;
    }
    let c = 0;
    for(let i = 1; i <= count_224; i++){
      let id = "224" + "-" +"("+ i + "," + j+")";
      let name = "224" + "-"+this.abc[j-1].letra + i;
      this.points224.push({cx: cx_224, cy : cy_224,price :10,id :id,name : name});
      cx_224 += 1.98;
      cy_224 += 0.176;
      c++;
    }
    diferenciaX_224 += 0.1;
    diferenciaY_224 += 3.2;
     cx_224 = 83.7 + diferenciaX_224 ;
     cy_224 = 814.15 - diferenciaY_224;
  }
//////////////////////////////// Fin algoritmo seccion 224 ////////////////////////////////

//---------------------------------------------------------------------------------------//

//////////////////////////////// Inicio algoritmo seccion 222 ////////////////////////////////
let cx_222 =  148.7;
let cy_222 = 820.15;
let count_222 = 31;
let diferenciaX_222 = 0;
let diferenciaY_222 = 0;
for(let j = 1; j <= 14; j++){

  switch(j){
    case 0:
      break

    case 1:
      break

    case 2:
      cx_222 -= 0.2;
      break

    case 3:
      cx_222 -= 0.8;
      cy_222 += 0.1;
      break

    case 4:
      cx_222 -= 0.9;
      cy_222 += 0.305;
      break

    case 5:
      count_222 -=1;
      cx_222 -= 0.31;
      cy_222 +=0.2;
      break

    case 6:
      cx_222 -= 0.5;
      cy_222 += 0.3;
      break

    case 7:
      count_222 -=1;
      cx_222 += 0.1;
      cy_222 +=0.09;
      break

    case 8:
      cx_222 -= 0.3;
      break

    case 9:
      cx_222 -= 0.82;
      cy_222 -= 0.1;
      break

    case 10:
      count_222 -=1;
      cx_222 -= 0.52;
      cy_222 -= 0.1;
      break

    case 11:
      cx_222 -= 0.89;
      cy_222 -= 0.3;
      break

    case 12:
      cx_222 -= 1.64;
      cy_222 -= 0.16;
      break

    case 13:
      cx_222 -= 1.98;
      cy_222 -= 0.2;
      break

    case 14:
      count_222 -= 1;
      cx_222 -= 1.5;
      cy_222 -= 0.4;
      break

  }

  let c = 0;
  for(let i = 1; i <= count_222; i++){
    let id = "222" + "-" +"("+ i + "," + j+")";
    let name = "222" + "-"+this.abc[j-1].letra + i;
    this.points222.push({cx: cx_222, cy : cy_222,price :10,id :id,name : name});
    cx_222 += 1.97;
    cy_222 -= 0.31;
    c++;
  }
  diferenciaY_222 += 3.11;
   cx_222 = 148.7 + diferenciaX_222 ;
   cy_222 = 820.15 - diferenciaY_222;
}
//////////////////////////////// Fin algoritmo seccion 222 ////////////////////////////////

//---------------------------------------------------------------------------------------//

//////////////////////////////// Inicio algoritmo seccion 220 ////////////////////////////////
let cx_220 =  218.55;
let cy_220 = 813.2;
let count_220 = 22;
let diferenciaX_220 = 0;
let diferenciaY_220 = 0;
for(let j = 1; j <= 17; j++){

  switch(j){
    case 0:
      break

    case 1:
      break

    case 2:
      break

    case 3:
      break

    case 4:
      break

    case 5:
      break

    case 6:
      break

    case 7:
      count_220
      cx_220 -= 0.1;
      cy_220 += 0.1;
      break

    case 8:
      cy_220 += 0.1;
      break

    case 9:
      cy_220 += 0.1;
      break

    case 10:
      cy_220 += 0.1;
      break

    case 11:
      cy_220 += 0.1;
      break

    case 12:
      cy_220 -= 0.2;
      break

    case 13:
      cy_220 -= 0.3;
      break

    case 14:
      cy_220 -= 0.3;
      break

  }

  if (j > 7 ){
    cy_220 -= 0.3;
  }

  for(let i = 1; i <= count_220; i++){
    let id = "220" + "-" +"("+ i + "," + j+")";
    let name = "220" + "-"+this.abc[j-1].letra + i;
    this.points220.push({cx: cx_220, cy : cy_220,price :10,id :id,name : name});
    if (j <= 2){
      cx_220 += 1.97;
      cy_220 -= 0.35;
    }else if(j<8){
      cx_220 += 1.97;
      cy_220 -= 0.32;
    }else{
      cx_220 += 1.97;
      cy_220 -= 0.35;

    }
    if (j == 7){
      cy_220 -=0.01;
    }
    if (j == 8 || j == 9 || j ==10){
      cy_220 += 0.02;
    }

  }
  if (j< 2){
    diferenciaX_220 += 0.38;
    diferenciaY_220 += 2.74;
     cx_220 = 218.55 - diferenciaX_220 ;
     cy_220 = 813.2 - diferenciaY_220;
  }else if (j ==2){
    diferenciaX_220 = 0;
    diferenciaY_220 =0;
    count_220 += 3;
    cx_220 = 214.5 - diferenciaX_220;
    cy_220 = 807.4 - diferenciaY_220;
  }else{
    diferenciaX_220 += 0.49;
    diferenciaY_220 += 2.79;
    cx_220 = 214.5 - diferenciaX_220;
    cy_220 = 807.2 - diferenciaY_220;
  }

}
//////////////////////////////// Fin algoritmo seccion 220 ////////////////////////////////

  this.id = this.activatedRoute.snapshot.paramMap.get('id');
  this.finalid = this.id - 1;

  this.getEvento().subscribe((res) => {
    this.eventos = res;
    this.name = this.eventos[this.id].name;
    this.ubicacion = this.eventos[this.id].shortname;
    this.precio = this.eventos[this.id].key;
  });
}

public mouseEnter($event:Event, data:any): void {
    console.log(data);
    let circle = $event.target as HTMLElement;
    let coordinates = circle.getBoundingClientRect();

    let x = `${coordinates.left - 50}px`;
    let y = `${coordinates.top - 80}px`;


    // alert(data);
    this.renderer.setStyle(this.tooltip.nativeElement, 'left', x);
    this.renderer.setStyle(this.tooltip.nativeElement, 'top', y);
    this.renderer.setStyle(this.tooltip.nativeElement, 'display', 'block');
    this.renderer.setProperty(this.tooltip.nativeElement, 'innerHTML', 'Seccion A <br> Fila: J <br> Asiento 80 <br> Precio ' + data);
  }

  public mouseLeave($event:any): void {
    this.renderer.setProperty(this.tooltip.nativeElement, 'innerHTML', '');
    this.renderer.setStyle(this.tooltip.nativeElement, 'display', 'none');
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

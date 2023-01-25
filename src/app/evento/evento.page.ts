import { Component,OnInit,ElementRef, ViewChild,AfterViewInit, Renderer2} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import * as svgPanZoom from 'svg-pan-zoom';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-evento',
  templateUrl: 'evento.page.html',
  styleUrls: ['evento.page.scss']
})
export class EventoPage implements OnInit{
  private panZoom!: SvgPanZoom.Instance;

  public points: any =[];
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
    private renderer: Renderer2) {}
    @ViewChild('svg', {static: false}) svg!: ElementRef<SVGSVGElement>;

    @ViewChild('tooltip') tooltip!: ElementRef;

    ngAfterViewInit() {
      // console.log(this.svg.nativeElement);

    }
  ngOnInit() {
    let cx =  2553;
    let cy = 6150.16;

    for(let j = 1; j <= 7; j++){

      for(let i = 1; i <= 10; i++){
        this.points.push({cx: cx, cy : cy,price :10});
        cx += 78;
      }
      cy -= 50;
      cx = 2553
    }



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

    for (let point of this.points) {
      // console.log(point.cx);

    }
    // console.log("id", this.id);
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

  openSection($section:any):void{
    console.log("dentro");
    let section:any = $section;
    let text:any = "Usted esta en la seccion " + section ;
    Swal.fire({
      title : "Estos son tus asientos estas seguro de tu compra ?",
      text : text,
      heightAuto : true
    });
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


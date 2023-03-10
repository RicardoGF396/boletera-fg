import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import Swal from 'sweetalert2';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {
  public params:any ;
  public color:any;
  public svg:any;
  public id:any;
  public selected:any;
  public section:any;
  constructor(private activatedRoute:ActivatedRoute,
    private navParams: NavParams,public modalCtrl: ModalController) {
      this.id = navParams.get('id');
       this.svg = navParams.get('svg');
      if (navParams.get('svg')== 'NODAL') {
        if (navParams.get('section') == "VIP"){
          this.color = "st0";
        }else if (navParams.get('section') == "ORO"){
          this.color = "st1";
        }else if (navParams.get('section') == "PLATA1"){
          this.color = "st2";
        }else if (navParams.get('section') == "PLATA2"){
          this.color = "st3";
        }else if (navParams.get('section') == "PLATA3"){
          this.color = "st4";
        }else if (navParams.get('section') == "BRONCE"){
          this.color = "st5";
        }
      }else if (this.svg == 'BASKET'){
        this.section = navParams.get('section');
        console.log(this.section);
        console.log("hola")
      }
    this.params = Object.assign({}, this.getParams());
  }

  ngOnInit() {
  }

  getParams() {
    return this.activatedRoute.snapshot.params;
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  selectSeat($seat:Event):void{
    let seat:any =$seat.target;
    if (this.svg == 'NODAL'){
      let circle = document.getElementById(seat.dataset.seatId);
      console.log(circle);
      if (seat.dataset.isSele == 0){
        circle?.setAttribute("class","st6");
        seat.dataset.isSele = 1;
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Seleccionado',
          text:'Asiento ' + seat.dataset.seatId
        })
      }else {
        circle?.setAttribute("class",this.color);
        seat.dataset.isSele =0;
      }
    }else if (this.svg == 'BASKET'){
      console.log(seat.id);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  public loginForm: FormGroup;
  isSubmit: boolean = false;

  constructor(public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required]],
    });
  }

  ngOnInit() {}
  get errorControl() {
    return this.loginForm.controls;
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  submitForm() {
    this.isSubmit = true;
    //Campo especifico this.loginForm.value['correo']
    //Todo el formulario this.loginForm.value
    if (!this.loginForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingresa todos los campos',
        heightAuto: false,
      });

      // alert('Ingresa todos los valores');
      // return false;
    } else {
      Swal.fire({
        title: 'Bienvenido! ' + this.loginForm.value['correo'],
        heightAuto: false,
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerForm: FormGroup;
  isSubmit: boolean = false;
  datosTarjeta: boolean = false;
  datosTarjetaDiv: any;

  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombreC: ['', [Validators.required]],
      segundonombreC: [''],
      apellidoC: ['', [Validators.required]],
      segundoapellidoC: ['', [Validators.required]],
      telefonoC: ['', [Validators.required]],
      correoC: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      contrasenaC: ['', [Validators.required, Validators.minLength(6)]],
      paisD: ['', [Validators.required]],
      calleD: ['', [Validators.required]],
      coloniaD: ['', [Validators.required]],
      ciudadD: ['', [Validators.required]],
      estadoD: ['', [Validators.required]],
      cpD: ['', [Validators.required]],
      datosTarjeta: [false],
    });
  }
  ngOnInit() {}
  isChecked() {
    console.log('Nuevo estado:' + this.datosTarjeta);
    if (this.datosTarjeta == true) {
      this.datosTarjeta = true;
      this.registerForm = this.formBuilder.group({
        nombreC: [this.registerForm.value['nombreC'], [Validators.required]],
        segundonombreC: [this.registerForm.value['segundonombreC']],
        apellidoC: [
          this.registerForm.value['apellidoC'],
          [Validators.required],
        ],
        segundoapellidoC: [
          this.registerForm.value['segundoapellidoC'],
          [Validators.required],
        ],
        telefonoC: [
          this.registerForm.value['telefonoC'],
          [Validators.required],
        ],
        correoC: [
          this.registerForm.value['correoC'],
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        contrasenaC: [
          this.registerForm.value['contrasenaC'],
          [Validators.required, Validators.minLength(6)],
        ],
        paisD: [this.registerForm.value['paisD'], [Validators.required]],
        calleD: [this.registerForm.value['calleD'], [Validators.required]],
        coloniaD: [this.registerForm.value['coloniaD'], [Validators.required]],
        ciudadD: [this.registerForm.value['ciudadD'], [Validators.required]],
        estadoD: [this.registerForm.value['estadoD'], [Validators.required]],
        cpD: [this.registerForm.value['cpD'], [Validators.required]],
        nombreF: ['', [Validators.required]],
        segundonombreF: ['', [Validators.required]],
        apellidoF: ['', [Validators.required]],
        segundoapellidoF: ['', [Validators.required]],
        paisF: ['', [Validators.required]],
        calleF: ['', [Validators.required]],
        coloniaF: ['', [Validators.required]],
        ciudadF: ['', [Validators.required]],
        estadoF: ['', [Validators.required]],
        cpF: ['', [Validators.required]],
        datosTarjeta: [true],
      });
    } else {
      this.datosTarjeta = false;
      this.registerForm = this.formBuilder.group({
        nombreC: [this.registerForm.value['nombreC'], [Validators.required]],
        segundonombreC: [this.registerForm.value['segundonombreC']],
        apellidoC: [
          this.registerForm.value['apellidoC'],
          [Validators.required],
        ],
        segundoapellidoC: [
          this.registerForm.value['segundoapellidoC'],
          [Validators.required],
        ],
        telefonoC: [
          this.registerForm.value['telefonoC'],
          [Validators.required],
        ],
        correoC: [
          this.registerForm.value['correoC'],
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        contrasenaC: [
          this.registerForm.value['contrasenaC'],
          [Validators.required, Validators.minLength(6)],
        ],
        paisD: [this.registerForm.value['paisD'], [Validators.required]],
        calleD: [this.registerForm.value['calleD'], [Validators.required]],
        coloniaD: [this.registerForm.value['coloniaD'], [Validators.required]],
        ciudadD: [this.registerForm.value['ciudadD'], [Validators.required]],
        estadoD: [this.registerForm.value['estadoD'], [Validators.required]],
        cpD: [this.registerForm.value['cpD'], [Validators.required]],
        nombreF: [''],
        segundonombreF: [''],
        apellidoF: [''],
        segundoapellidoF: [''],
        paisF: [''],
        calleF: [''],
        coloniaF: [''],
        ciudadF: [''],
        estadoF: [''],
        cpF: [''],
        datosTarjeta: [false],
      });
    }
  }
  submitForm() {
    this.isSubmit = true;
    if (!this.registerForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingresa todos los campos',
        heightAuto: false,
      });
    } else {
      // console.log(this.registerForm.value);
      Swal.fire({
        title: 'Bienvenido! ' + this.registerForm.value['nombreC'],
        heightAuto: false,
      });
    }
  }
}

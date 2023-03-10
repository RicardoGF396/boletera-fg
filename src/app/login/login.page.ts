import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService, SocialLoginModule } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider } from '@abacritt/angularx-social-login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  /* Propiedades usadas para el login con redes sociales */
  user: any;
  loggedIn: boolean = false;

  public loginForm: FormGroup;
  isSubmit: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private authService: SocialAuthService
  ) {
    this.loginForm = this.formBuilder.group({
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    /* El AuthService  se debe de iniciar antes, 
       permite mostrar el objeto de User */
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
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

  /* ======= Facebook ======= */
  facebookSignin(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  googleSignin(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

  signOut(): void {
    this.authService.signOut();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IonicToastService } from 'src/app/services/ionic-toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  modelbase = new UsuarioModel();

  model = new UsuarioModel;
  constructor(
    public navCtrl: NavController, 
    private router: Router,
    private authService: AuthenticationService,
    private toastservice: IonicToastService
  ) {}

  ngOnInit() {}

  validateInputs() {
    let usuario = this.model.usuario.trim();
    let contrasenia = this.model.contrasenia.trim();
    return (
      this.model.usuario &&
      this.model.contrasenia &&
      usuario.length > 0 &&
      contrasenia.length > 0
    );
  }

  btnRegistro_clic(){
    //Navegamos a la pagina de registro
    this.navCtrl.navigateForward("/registro");
  }

  loginAction() {
    if (this.validateInputs()) {
     this.modelbase = JSON.parse(localStorage.getItem('DATA_CLIENTE') as string);
     if(this.modelbase.usuario == this.model.usuario && this.modelbase.contrasenia == this.model.contrasenia){
      this.toastservice.successToast("Bienvenido");
      this.navCtrl.navigateRoot("/home");
     }
     else{
      this.toastservice.errorToast("Verificar usuario o contraseña ingresada");
     } 
    } else {
      this.toastservice.errorToast("Faltan campos por llenar");
    }
  }
}

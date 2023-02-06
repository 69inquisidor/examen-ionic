import { Component, forwardRef, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { IonicToastService } from 'src/app/services/ionic-toast.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage implements OnInit {
  model = new UsuarioModel();
  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;
  constructor(
    private serrvice: RegisterService, 
    private formBuilder: FormBuilder, 
    public navCtrl: NavController, 
    private toastservice: IonicToastService) {
    this.ionicForm = this.formBuilder.group({
      nombrecompleto: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      contrasenia: [this.defaultDate],
    })
   }
  ngOnInit() {
        setTimeout(() => {
      this.obtenerDatosUsuarioRandom();
    }, 0);
  }
  getDate(e:any) {
   
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    if (this.validateInputs()) {  
      
      localStorage.setItem('DATA_CLIENTE', JSON.stringify(this.model));
      this.toastservice.successToast("Registro creado");
      this.back();
    } else {
      this.toastservice.errorToast("Faltan campos por llenar");
    }
    // this.isSubmitted = true;
    // if (!this.ionicForm.valid) {
    //    this.toastservice.errorToast("Faltan campos por llenar");
      
    // } 
  }


  obtenerDatosUsuarioRandom() {
    this.serrvice.ObtenerDatosUSerRandom().then((respuesta: any) => {
      let resp;
      resp = respuesta;
      console.log(resp.results[0]);
      if (resp.results) {
        this.model.nombrecompleto = `${resp.results[0].name.title} ${resp.results[0].name.first} ${resp.results[0].name.last}`;
        this.model.usuario = resp.results[0].login.username;
        this.model.contrasenia = resp.results[0].login.password;
      }
    });
  }

  validateInputs() {
    let nombrecompleto = this.model.nombrecompleto.trim();
    let usuario = this.model.usuario.trim();
    let contrasenia = this.model.contrasenia.trim();
    return (
      this.model.nombrecompleto &&
      this.model.usuario &&
      this.model.contrasenia &&
      nombrecompleto.length > 0 &&
      usuario.length > 0 &&
      contrasenia.length > 0
    );
  }


  back(){
    this.navCtrl.pop();
  }

}

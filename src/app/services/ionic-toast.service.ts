import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicToastService {

  private myToast: any;

  constructor(
    private toast: ToastController
  ) { }

  successToast(mensaje:string){
    this.myToast = this.toast.create({
      message: mensaje,
      position: 'bottom',
      animated:true,
      cssClass:"toast-success",
      duration: 5000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }


  errorToast(mensaje:string){
    this.myToast = this.toast.create({
      message: mensaje,
      position: 'bottom',
      animated:true,
      cssClass:"toast-error",
      duration: 5000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }
}
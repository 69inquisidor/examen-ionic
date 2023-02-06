import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isModalOpen = false;
  info:any;

  setOpen(isOpen: boolean,data:any) {
    this.isModalOpen = isOpen;
    if(data != null)
      this.info = data;
    console.log(this.info);
  }

  filtrar: string = "";
  list: any[] = [];
  listfiltrado: any[] = [];
  constructor(private nav:NavController, private service: HomeService) { 
    setTimeout(() => {
      this.obtenerListado();
    }, 0);
  }

  ngOnInit() {
   
  }

  onSearchChange( event :any) {
    // console.log(event);
    this.filtrar = event.detail.value;
  }


  obtenerListado(){
    this.service.ObtenerListado().then((respuesta:any) => {
      let resp;
      resp = respuesta;
      for (let index = 0; index < resp.length; index++) {
        let item = {
          nombre : resp[index].show.name,
          descripcion : resp[index].show.summary,
          idioma : resp[index].show.language,
          imagen : (resp[index].show.image) ? resp[index].show.image.medium : "https://ionicframework.com/docs/img/demos/thumbnail.svg"
        }
        this.list.push(item);
      }
      this.filtrar = "";
      console.log(this.list)
    }, (error: any) => {
      let respuesta = JSON.parse(error);
      console.log(respuesta);
    });
  }

  cerrar(){
    localStorage.clear();
    this.nav.navigateRoot("/login");
  }

}

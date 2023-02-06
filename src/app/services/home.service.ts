import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, throwError, timeout } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


const base_url = environment.listado;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  async ObtenerListado() {
    // this.http.get('assets/data/menu1.json').map(res => res.json()).subscribe(res => {
    //   this.data = res.menuItems;
    //   console.log(this.data);
    // },
    // (err) => {
    //   alert('failed loading json data');
    // });

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // };
    let respuesta = await firstValueFrom(this.http.get('assets/data/list.json'));
    return respuesta;
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    let respuesta = {
      msj: error.error,
      ok: error.ok,
      statusText: error.statusText,
      status: error.status
    }

    return throwError(() => JSON.stringify(respuesta));
  }

  
}

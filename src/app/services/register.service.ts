import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, firstValueFrom, throwError, timeout } from 'rxjs';
import { environment } from 'src/environments/environment.prod';



const base_url = environment.user_random;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  async ObtenerDatosUSerRandom() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    let respuesta = await firstValueFrom(this.http.get(`${base_url}`, httpOptions).pipe(timeout(100000), catchError(this.handleError)));
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

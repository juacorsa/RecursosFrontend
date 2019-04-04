import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Idioma } from '../models/idioma.model';
import { environment } from '../../environments/environment';

const headers = new HttpHeaders({ 'Content-Type':'application/json' });

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {  
  private url: string = `${environment.api}/idiomas`;

  constructor(private http: HttpClient) { }
  
  obtenerIdiomas(): Observable<Idioma[]> {  	
    return this.http.get<Idioma[]>(this.url)
      .pipe(catchError(this.handleError));     
  }

  obtenerIdioma(id: string): Observable<Idioma> {
  	return this.http.get<Idioma>(`${this.url}/${id}}`)
      .pipe(catchError(this.handleError));     
  }

  registrarIdioma(idioma: Idioma): Observable<Idioma> {    
    return this.http.post<Idioma>(this.url, idioma, { headers })
      .pipe(catchError(this.handleError));
  }

  actualizarIdioma(idioma: Idioma): Observable<void> {    
    return this.http.put<void>(this.url, idioma, { headers })
      .pipe(catchError(this.handleError));
  }
  
  handleError(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {      
      errorMessage = `Error: ${error.error.message}`;
    } else {      
      errorMessage = `Error de servidor: ${error.status}\nMessage: ${error.message}`;
    } 

    return throwError(errorMessage);
  }
}

// https://scotch.io/bar-talk/error-handling-with-angular-6-tips-and-best-practices192
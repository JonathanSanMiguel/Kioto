import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { item } from "../models/item";
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // EndPoint Node/Express API
  REST_API: string = 'http://localhost:5000/Inshka';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Obtener todos los items.
  public getAllItems(): Observable<item[]>{
    let API_URL = `${this.REST_API}/Items`
    return this.http.get<item[]>(API_URL)
  }//getAllItems

  getOneItem(id: any): Observable<item> {
    return this.http.get<item>(`${this.REST_API}/OneItem${id}`);
  }//getOneItem

  // Agregar un item
  public CreateItem(data: item): Observable<any> {
    //Canota el Enpoint y la extencion en un let
    let API_URL = `${this.REST_API}/create`;
    return this.http.post(API_URL, data)
    .pipe(
      catchError(this.handleError)
    )//pipe
  }//CreateItem

  // Actualizar un item.
  public updateItem(id:any, data:any): Observable<any> {
    //Canota el EndPoint el link y el id del item a actualizar.
    let API_URL = `${this.REST_API}/OneItem/${id}`;
    return this.http.put(API_URL, data, { headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
    )//pipe
  }//updateItem

  //Borrar un item
  public deleteItem(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete/${id}`;
    return this.http.delete(API_URL, { headers: this.httpHeaders}).pipe(
      catchError(this.handleError)
    )//return
  }//deleteItem

  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }//else
    console.log(errorMessage);
    return throwError(errorMessage);
  }//handleError
}

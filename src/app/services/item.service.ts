import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { item } from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  public getAllItems(): Observable<item[]>{
    return this.http.get<item[]>('http://localhost:5000/Inshka/Items');
  }

  public getOneItem(): Observable<item[]>{
    return this.http.get<item[]>('http://localhost:5000/Inska/OneItem/3')
  }
}

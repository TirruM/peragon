import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerogonServices {

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/categories.json")
  }
  public getSellerMessages(): Observable<any> {
    return this.http.get("./assets/seller-messages.json")
  }
}

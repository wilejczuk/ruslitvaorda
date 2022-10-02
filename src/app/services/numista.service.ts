import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NumistaService {
  constructor(private http: HttpClient) { }
  APIKey = "pFI7CJd7epoQq6AayMN64dLbVZwzRObIQVaIfV";

  getHP() {
    return this.http.get<string>('https://api.numista.com/api/v3/types?catalogue=553',
     { headers: {"Numista-API-Key":this.APIKey} });
  }

  getKievan() {
    return this.http.get<string>('https://api.numista.com/api/v3/types?lang=en&q=Srebrennik',
     { headers: {"Numista-API-Key":this.APIKey} });
  }

  getParticular(item: number) {
    return this.http.get<string>('https://api.numista.com/api/v3/types/'+item,
     { headers: {"Numista-API-Key":this.APIKey} });
  }
}

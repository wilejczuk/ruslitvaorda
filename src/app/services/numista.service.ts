import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NumistaService {
  constructor(private http: HttpClient) { }

  getSrebreniques() {
    return this.http.get<string>('https://api.numista.com/api/v3/types?catalogue=553',
     { headers: {"Numista-API-Key":"pFI7CJd7epoQq6AayMN64dLbVZwzRObIQVaIfV"} });
  }

  getParticular(item: number) {
    return this.http.get<string>('https://api.numista.com/api/v3/types/'+item,
     { headers: {"Numista-API-Key":"pFI7CJd7epoQq6AayMN64dLbVZwzRObIQVaIfV"} });
  }
}

// https://api.numista.com/api/v3/types?lang=en&q=Srebrennik

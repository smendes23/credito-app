import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CreditoResponse {
  id: number;
  numeroCredito: string;
  numeroNfse: string;
  dataConstituicao: string;
  valorIssqn: number;
  tipoCredito: string;
  simplesNacional: boolean;
  aliquota: number;
  valorFaturado: number;
  valorDeducao: number;
  baseCalculo: number;
}

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  private apiUrl = 'http://localhost:8090/v1/api/creditos';

  constructor(private http: HttpClient) { }

  consultarPorNfse(numeroNfse: string): Observable<CreditoResponse[]> {
    return this.http.get<CreditoResponse[]>(`${this.apiUrl}/${numeroNfse}`);
  }

  consultarPorNumeroCredito(numeroCredito: string): Observable<CreditoResponse> {
    return this.http.get<CreditoResponse>(`${this.apiUrl}/${numeroCredito}/credito`);
  }
}

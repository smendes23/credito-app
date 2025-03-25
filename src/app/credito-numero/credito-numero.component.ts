import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditoService, CreditoResponse } from '../credito.service';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-credito-numero',
  templateUrl: './credito-numero.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    FormsModule
  ],
  styleUrls: ['./credito-numero.component.css']
})
export class CreditoNumeroComponent implements OnInit {
  numeroCredito: string = '';
  credito: CreditoResponse | null = null;
  errorMessage: string | null = null;

  constructor(private creditoService: CreditoService) { }

  ngOnInit(): void {
  }

  consultar(): void {
    this.creditoService.consultarPorNumeroCredito(this.numeroCredito).subscribe({
      next: (data) => {
        this.credito = data;
        this.errorMessage = null; // Clear any previous error message
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.errorMessage = 'Credito não encontrado!';
        } else {
          this.errorMessage = 'Ocorreu um erro ao consultar o crédito.';
        }
        this.credito = null; // Clear any previous credit data
      }
    });
  }
}

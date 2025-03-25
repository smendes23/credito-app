import { Component, OnInit } from '@angular/core';
import { CreditoService, CreditoResponse } from '../credito.service';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf, CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-credito-nfse',
  templateUrl: './credito-nfse.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    CommonModule // Add CommonModule to imports array
  ],
  styleUrls: ['./credito-nfse.component.css']
})
export class CreditoNfseComponent implements OnInit {
  numeroNfse: string = '';
  creditos: CreditoResponse[] = [];
  queryNotExists: boolean = false;
  errorMessage: string = '';

  constructor(private creditoService: CreditoService) { }

  ngOnInit(): void {
  }

  consultar(): void {
    this.creditoService.consultarPorNfse(this.numeroNfse).subscribe((data: any[]) => {
        this.creditos = data;
        this.queryNotExists = data.length === 0;
        this.errorMessage = '';
      },
      (error) => {
        if (error.status === 404) {
          this.queryNotExists = true;
          this.errorMessage = error.error.message;
        } else {
          this.queryNotExists = false;
          this.errorMessage = 'An unexpected error occurred.';
        }
        this.creditos = [];
      }
    );
  }
}

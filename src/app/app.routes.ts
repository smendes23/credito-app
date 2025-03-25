import { Routes } from '@angular/router';
import { CreditoNfseComponent } from './credito-nfse/credito-nfse.component';
import { CreditoNumeroComponent } from './credito-numero/credito-numero.component';

export const routes: Routes = [
  { path: 'credito-nfse', component: CreditoNfseComponent },
  { path: 'credito-numero', component: CreditoNumeroComponent },
  { path: '', redirectTo: '/credito-nfse', pathMatch: 'full' }
];

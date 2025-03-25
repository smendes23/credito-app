import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoNfseComponent } from './credito-nfse.component';

describe('CreditoNfseComponent', () => {
  let component: CreditoNfseComponent;
  let fixture: ComponentFixture<CreditoNfseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditoNfseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoNfseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

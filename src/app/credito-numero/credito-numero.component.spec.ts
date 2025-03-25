import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoNumeroComponent } from './credito-numero.component';

describe('CreditoNumeroComponent', () => {
  let component: CreditoNumeroComponent;
  let fixture: ComponentFixture<CreditoNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditoNumeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

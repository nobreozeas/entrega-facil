import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoDetalhePage } from './pedido-detalhe.page';

describe('PedidoDetalhePage', () => {
  let component: PedidoDetalhePage;
  let fixture: ComponentFixture<PedidoDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoDetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

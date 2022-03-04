import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJuegoComponent } from './listar-juego.component';

describe('ListarJuegoComponent', () => {
  let component: ListarJuegoComponent;
  let fixture: ComponentFixture<ListarJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

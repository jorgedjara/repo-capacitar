import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJuegosUsuarioComponent } from './listar-juegos-usuario.component';

describe('ListarJuegosUsuarioComponent', () => {
  let component: ListarJuegosUsuarioComponent;
  let fixture: ComponentFixture<ListarJuegosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarJuegosUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJuegosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

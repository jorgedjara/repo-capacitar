import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosUsuarioComponent } from './juegos-usuario.component';

describe('JuegosUsuarioComponent', () => {
  let component: JuegosUsuarioComponent;
  let fixture: ComponentFixture<JuegosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

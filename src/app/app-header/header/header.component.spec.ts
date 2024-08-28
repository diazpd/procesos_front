/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('debería mostrar el nombre de usuario en la barra de navegación cuando está disponible', () => {
    // Asigna un valor a la variable `usuario`
    component.usuario = 'Juan Pérez';
    fixture.detectChanges(); // Aplica los cambios en la plantilla

    // Busca el elemento que contiene el nombre de usuario
    const userNameElement = fixture.debugElement.query(By.css('#user_name'));
    
    // Verifica que el elemento existe y contiene el texto adecuado
    expect(userNameElement).toBeTruthy();
    expect(userNameElement.nativeElement.textContent).toContain('Bienvenido, Juan Pérez');
  });

  it('no debería mostrar el nombre de usuario si no está disponible', () => {
    // Asegúrate de que `usuario` sea null o undefined
    //component.usuario = null;
    fixture.detectChanges(); // Aplica los cambios en la plantilla

    // Busca el elemento que contiene el nombre de usuario
    const userNameElement = fixture.debugElement.query(By.css('#user_name'));

    // Verifica que el elemento no esté en el DOM
    expect(userNameElement).toBeFalsy();
  });


});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasVoluntariosComponent } from './listas-voluntarios.component';

describe('ListasVoluntariosComponent', () => {
  let component: ListasVoluntariosComponent;
  let fixture: ComponentFixture<ListasVoluntariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasVoluntariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasVoluntariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

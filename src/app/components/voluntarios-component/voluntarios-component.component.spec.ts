import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariosComponentComponent } from './voluntarios-component.component';

describe('VoluntariosComponentComponent', () => {
  let component: VoluntariosComponentComponent;
  let fixture: ComponentFixture<VoluntariosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoluntariosComponentComponent]
    });
    fixture = TestBed.createComponent(VoluntariosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

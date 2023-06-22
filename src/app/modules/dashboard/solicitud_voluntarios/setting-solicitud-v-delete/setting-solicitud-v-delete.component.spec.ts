import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSolicitudVDeleteComponent } from './setting-solicitud-v-delete.component';

describe('SettingSolicitudVDeleteComponent', () => {
  let component: SettingSolicitudVDeleteComponent;
  let fixture: ComponentFixture<SettingSolicitudVDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingSolicitudVDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingSolicitudVDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSolicitudVEditComponent } from './setting-solicitud-v-edit.component';

describe('SettingSolicitudVEditComponent', () => {
  let component: SettingSolicitudVEditComponent;
  let fixture: ComponentFixture<SettingSolicitudVEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingSolicitudVEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingSolicitudVEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

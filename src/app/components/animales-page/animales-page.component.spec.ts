import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesPageComponent } from './animales-page.component';

describe('AnimalesPageComponent', () => {
  let component: AnimalesPageComponent;
  let fixture: ComponentFixture<AnimalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

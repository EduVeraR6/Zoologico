import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAnimalesPageComponent } from './carousel-animales-page.component';

describe('CarouselAnimalesPageComponent', () => {
  let component: CarouselAnimalesPageComponent;
  let fixture: ComponentFixture<CarouselAnimalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselAnimalesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselAnimalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

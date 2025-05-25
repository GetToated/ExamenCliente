import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCountriesComponent } from './buscar-countries.component';

describe('BuscarCountriesComponent', () => {
  let component: BuscarCountriesComponent;
  let fixture: ComponentFixture<BuscarCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

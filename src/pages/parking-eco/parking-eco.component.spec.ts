import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingEcoComponent } from './parking-eco.component';

describe('ParkingEcoComponent', () => {
  let component: ParkingEcoComponent;
  let fixture: ComponentFixture<ParkingEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingEcoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParkingEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

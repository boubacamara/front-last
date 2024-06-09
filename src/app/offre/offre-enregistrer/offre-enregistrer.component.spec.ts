import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreEnregistrerComponent } from './offre-enregistrer.component';

describe('OffreEnregistrerComponent', () => {
  let component: OffreEnregistrerComponent;
  let fixture: ComponentFixture<OffreEnregistrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreEnregistrerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreEnregistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

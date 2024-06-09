import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatConnexionComponent } from './candidat-connexion.component';

describe('CandidatConnexionComponent', () => {
  let component: CandidatConnexionComponent;
  let fixture: ComponentFixture<CandidatConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatConnexionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatEnregistrerComponent } from './candidat-enregistrer.component';

describe('CandidatEnregistrerComponent', () => {
  let component: CandidatEnregistrerComponent;
  let fixture: ComponentFixture<CandidatEnregistrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatEnregistrerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatEnregistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireInscriptionComponent } from './formulaire-inscription.component';

describe('FormulaireInscrptionComponent', () => {
  let component: FormulaireInscriptionComponent;
  let fixture: ComponentFixture<FormulaireInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
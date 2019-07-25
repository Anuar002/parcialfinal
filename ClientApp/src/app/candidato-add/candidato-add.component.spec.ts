import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoAddComponent } from './candidato-add.component';

describe('CandidatoAddComponent', () => {
  let component: CandidatoAddComponent;
  let fixture: ComponentFixture<CandidatoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroVagasComponent } from './filtro-vagas.component';

describe('FiltroVagasComponent', () => {
  let component: FiltroVagasComponent;
  let fixture: ComponentFixture<FiltroVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroVagasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

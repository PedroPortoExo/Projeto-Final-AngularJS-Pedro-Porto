import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVagasComponent } from './list-vagas.component';

describe('ListVagasComponent', () => {
  let component: ListVagasComponent;
  let fixture: ComponentFixture<ListVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVagasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

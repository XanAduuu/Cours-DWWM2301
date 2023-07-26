import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecetteComponent } from './liste-recette.component';

describe('ListeRecetteComponent', () => {
  let component: ListeRecetteComponent;
  let fixture: ComponentFixture<ListeRecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeRecetteComponent]
    });
    fixture = TestBed.createComponent(ListeRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDexListComponent } from './poke-dex-list.component';

describe('PokeDexListComponent', () => {
  let component: PokeDexListComponent;
  let fixture: ComponentFixture<PokeDexListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeDexListComponent]
    });
    fixture = TestBed.createComponent(PokeDexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

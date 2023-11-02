import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMoviesListComponent } from './pokemon-movies-list.component';

describe('PokemonMoviesListComponent', () => {
  let component: PokemonMoviesListComponent;
  let fixture: ComponentFixture<PokemonMoviesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonMoviesListComponent]
    });
    fixture = TestBed.createComponent(PokemonMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

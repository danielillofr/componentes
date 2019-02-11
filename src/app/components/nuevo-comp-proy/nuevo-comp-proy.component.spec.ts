import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCompProyComponent } from './nuevo-comp-proy.component';

describe('NuevoCompProyComponent', () => {
  let component: NuevoCompProyComponent;
  let fixture: ComponentFixture<NuevoCompProyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoCompProyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCompProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

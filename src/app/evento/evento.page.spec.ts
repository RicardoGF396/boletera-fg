import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EventoPage } from './evento.page';

describe('EventoPage', () => {
  let component: EventoPage;
  let fixture: ComponentFixture<EventoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

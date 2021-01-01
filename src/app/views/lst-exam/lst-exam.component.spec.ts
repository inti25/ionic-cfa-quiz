import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LstExamComponent } from './lst-exam.component';

describe('LstExamComponent', () => {
  let component: LstExamComponent;
  let fixture: ComponentFixture<LstExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstExamComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LstExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

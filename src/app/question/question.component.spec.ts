import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import {OptionModel} from '../shared/model/option.model';

describe('OptionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an option object when it is selected in the template', () => {
    const option: OptionModel = new OptionModel(1, 1, 'test option');
    component.options.push(option);
    const optionInTemplate = fixture.nativeElement.querySelector('#option-' + option.optionId) as HTMLElement;
    optionInTemplate.click();

    expect(component.optionSelected).toHaveBeenCalledWith(option);
    expect(component.optionSelected.emit()).toHaveBeenCalledWith(option);
  });
});

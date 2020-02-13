import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireComponent } from './questionnaire.component';
import {IQuestionModel} from '../shared/model/question.model';
import {OptionModel} from '../shared/model/option.model';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should add the question to the answered questions when an option is selected', () => {
     const option = new OptionModel(1, 1, 'test option');
     component.onQuestionAnswered(option);

     expect(component.onQuestionAnswered).toHaveBeenCalledWith(option);
     expect(component.answeredQuestions.indexOf(option)).toBeGreaterThan(-1);
  });

  it('it should update the score when an option is selected', () => {
    const option = new OptionModel(1, 1, 'test option');
    component.onQuestionAnswered(option);

    expect(component.onQuestionAnswered).toHaveBeenCalledWith(option);
    expect(component.calculateScore).toHaveBeenCalled();
  });
});

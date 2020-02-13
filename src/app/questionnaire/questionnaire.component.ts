import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IOptionModel} from '../shared/model/option.model';
import {IQuestionModel, QuestionModel} from '../shared/model/question.model';
import {ScoreModel} from '../shared/model/score.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  score = 0;
  answeredQuestions: IQuestionModel[] = [];
  @Input() questions: IQuestionModel[];
  @Output() scoreCalculated: EventEmitter<ScoreModel> = new EventEmitter<ScoreModel>();

  constructor() { }

  ngOnInit() {
  }

  onQuestionAnswered(option: IOptionModel) {
    this.questions.map((question) => {
      if (question.questionId === option.questionId) {
        if (!this.answeredQuestionContains(question)) {
          this.answeredQuestions.push(question);
        } else {
          this.answeredQuestions.map(answeredQuestion => {
            if (answeredQuestion.questionId === option.questionId) {
              answeredQuestion.answeredOptionId = option.optionId;
              return answeredQuestion;
            }
          });
        }
      }
    });
  }

  answeredQuestionContains(question) {
    return this.answeredQuestions.map(answeredQuestion => answeredQuestion.questionId).indexOf(question.questionId) > -1;
  }

  calculateScore() {
    this.answeredQuestions.filter(question => question.correctOptionId === question.answeredOptionId || !question.answeredOptionId);
    this.score =  (this.answeredQuestions.length / this.questions.length) * 100;
  }

  showMyScore() {
    this.calculateScore();
    this.scoreCalculated.emit(new ScoreModel(this.score, this.answeredQuestions.length, this.questions.length));
  }

}

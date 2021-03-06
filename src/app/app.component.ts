import {Component, OnInit} from '@angular/core';
import questionnaireData from './questionnaire-data';
import {IQuestionModel, QuestionModel} from './shared/model/question.model';
import {OptionModel} from './shared/model/option.model';
import {IScoreModel, ScoreModel} from './shared/model/score.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'questionnaire-one';
  questions: IQuestionModel[] = [];
  score: IScoreModel = new ScoreModel();

  ngOnInit(): void {
    this.start();
  }

  start() {
    const questionnaire: string = questionnaireData;
    const questions = questionnaire.split('?');
    questions.forEach((question, index) => {
      if (index > 0) {
        this.questions.push(this.createQuestion(question, index));

      }
    });
  }

  isCorrectAnswer(line) {
    return line.indexOf('*') > -1;
  }

  createQuestion(question: string, questionId: number): QuestionModel {
    const questionModel = new QuestionModel(questionId);
    const lines = question.split('\n');
    lines.forEach((line, index) => {
      if (index === 0) {
        questionModel.text = line;
      } else {
        if (this.isCorrectAnswer(line)) {
          questionModel.correctOptionId = index;
        }
        const newOption = new OptionModel(questionId, index, this.trim(line, '*'));
        questionModel.addOption(newOption);
      }
    });
    return questionModel;
  }

  trim(text, val) {
    return text.replace(val, '');
  }

  onScoreCalculated(score) {
    this.score = score;
  }
}

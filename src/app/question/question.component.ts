import {Component, EventEmitter, OnInit} from '@angular/core';
import {IOptionModel} from '../shared/model/option.model';
import {IQuestionModel} from '../shared/model/question.model';

@Component({
  selector: 'app-option',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  options: IOptionModel[];
  optionSelected: EventEmitter<IOptionModel> = new EventEmitter<IOptionModel>();


  constructor() { }

  ngOnInit() {
  }

  selectOption(option: IOptionModel) {
    this.optionSelected.emit(option);
  }

}

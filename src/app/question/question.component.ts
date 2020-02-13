import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IOptionModel} from '../shared/model/option.model';
import {IQuestionModel} from '../shared/model/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: IQuestionModel;
  @Output() optionSelected: EventEmitter<IOptionModel> = new EventEmitter<IOptionModel>();


  constructor() { }

  ngOnInit() {
  }

  selectOption(option: IOptionModel) {
    this.optionSelected.emit(option);
  }

}

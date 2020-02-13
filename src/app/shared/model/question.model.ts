import {OptionModel} from './option.model';

export interface IQuestionModel {
  questionId?: number;
  options?: OptionModel[];
  text?: string;
  correctOptionId?: number;
  answeredOptionId?: number;
}

export class QuestionModel implements IQuestionModel {
  constructor(public questionId?: number,
              public options: OptionModel[] = [],
              public text?: string,
              public correctOptionId?: number,
              public answeredOptionId?: number) {
  }

  addOption(newOption: OptionModel) {
    this.options.push(newOption);
  }
}

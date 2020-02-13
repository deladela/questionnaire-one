export interface IOptionModel {
  optionId?: number;
  questionId?: number;
}

export class OptionModel implements IOptionModel {
  constructor(public questionId?: number, public optionId?: number, public text?: string) {
  }
}

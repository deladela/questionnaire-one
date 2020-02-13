export interface IScoreModel {
  score?: number;
  correct?: number;
  max?: number;
}

export class ScoreModel implements IScoreModel {
  constructor(public score?: number, public correct?: number, public max?: number) {
  }
}

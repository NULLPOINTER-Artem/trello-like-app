import type { EntityUserType } from './types';

export class User {
  state: EntityUserType;

  private constructor(inputParams: EntityUserType) {
    this.state = inputParams;
  }

  getName(): string {
    return `${this.state.firstName} ${this.state.lastName}${this.state.middleName ? this.state.middleName : ''}`;
  }
}

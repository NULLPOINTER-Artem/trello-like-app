import type { User } from './entity';

//*** login, logout, register ????
export abstract class UserRepositoryInterface {
  abstract create(): void;
  abstract delete(): void;

  abstract isAuthorized(): boolean;
}

import { defineStore } from 'pinia';
import type { UserRepositoryInterface } from '~/domain/user/repository';

class UserRepository implements UserRepositoryInterface {
  constructor() {}

  create(): void {}
  delete(): void {}
  isAuthorized(): boolean {
    return false;
  }
}

export const useUserStore = defineStore('UserStore', {
  state: () => ({}),
  getters: {},
  actions: {},
});

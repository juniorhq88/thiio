import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    currentUser: null,
  }),
  actions: {
    addUser(user) {
      this.users.push(user);
    },
    setCurrentUser(user) {
      this.currentUser = user;
    },
    removeUser(userId) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  }
});

'use strict';

class User {
  constructor(repository) {
    this.repository = repository;
  }

  get(id) {
    return this.repository.get(id);
  }
}

module.exports = User;

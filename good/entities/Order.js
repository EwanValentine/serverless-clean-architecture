'use strict';

class Order {
  constructor(repository) {
    this.repository = repository;
  }

  listByUser(uid) {
    return this.repository.listByUser(uid);
  }
}

module.exports = Order;

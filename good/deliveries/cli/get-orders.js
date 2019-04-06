'use strict';

// Load some mock data for local testing
const { userData, orderData } = require('./mock-data');

const InMemoryRepository = require('../../repositories/inmemory');
const userRepository = new InMemoryRepository(userData);
const orderRepository = new InMemoryRepository(orderData);
const getOrdersUsecase = require('../../usecases/get-orders')(
  userRepository,
  orderRepository,
);

const getOrders = () => {
  const id = process.argv[2];
  return getOrdersUsecase(id);
};

getOrders().then(res => {
  console.log(res);
});

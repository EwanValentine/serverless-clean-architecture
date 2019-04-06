'use strict';

const DynamoDBRepository = require('../../repositories/dynamodb');
const userRepository = new DynamoDBRepository(dynamodb, 'users');
const orderRepository = new DynamoDBRepository(dynamodb, 'orders');
const getOrdersUsecase = require('../../usecases/get-orders')(
  userRepository,
  orderRepository,
);

// Call this function with a GraphQL resolver
const getOrders = ({ id }) => {
  return getOrdersUsecase.getOrders(id);
};

module.exports = getOrders;

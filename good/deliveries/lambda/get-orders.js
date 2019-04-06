'use strict';

const DynamoDBRepository = require('../../repositories/dynamodb');
const userRepository = new DynamoDBRepository(dynamodb, 'users');
const orderRepository = new DynamoDBRepository(dynamodb, 'orders');
const getOrdersUsecase = require('../../usecases/get-orders')(
  userRepository,
  orderRepository,
);

const handler = async ({ body }) => {
  const { id } = body;
  return getOrdersUsecase(id);
};

module.exports = {
  handler,
};

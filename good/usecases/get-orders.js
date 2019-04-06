'use strict';

const User = require('../entities/User');
const Order = require('../entities/Order');

const getOrders = (userRepository, orderRepository) => async (userId) => {
  const userEntity = new User(userRepository);
  const orderEntity = new Order(orderRepository);
  try {
    const userPromise = userEntity.get(userId);
    const ordersPromise = orderEntity.listByUser(userId);
    const user = await userPromise;
    const orders = await ordersPromise;
    return {
      lifeTimeValue: user.lifeTimeValue,
      orders,
    };
  } catch (e) {
    return {
      error: e.message,
    };
  }
};

module.exports = getOrders;

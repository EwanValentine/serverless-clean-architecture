const getUser = async (id) => {
  const { Item } = await client.get({
    TableName: 'users',
    Key: { id },
  }).promise();
  return Item;
};

const getOrders = async (id) => {
  const { Items } = await client.query({
    TableName: 'orders',
    KeyConditionExpression: "userId = :uid",
    ExpressionAttributeValues: {
      ":uid": id,
    },
  });
  return Items;
};

const handler = async ({ body }) => {
  try {
    const { id } = body;
    const userPromise = getUser(id);
    const ordersPromise = getOrders(id);
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

module.exports = {
  handler,
};

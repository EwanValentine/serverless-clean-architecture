'use strict';

class DynamoDBRepository {
  constructor(client, table) {
    this.client = client;
    this.table = table;
  }

  async get(id) {
    const { Item } = await client.get({
      TableName: this.table,
      Key: { id },
    }).promise();
    return Item;
  }

  async listByUser(uid) {
    const { Items } = client.query({
      TableName: this.table,
      KeyConditionExpression: "userId = :uid",
      ExpressionAttributeValues: {
        ":uid": uid,
      },
    });
    return Items;
  }
}

module.exports = DynamoDBRepository;

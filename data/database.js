const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb://0.0.0.0:27017');
  database = client.db('online-shop');
  
}
//client has internal info

function getDb() {
  if (!database) {
    //if we are working with multiple db we get get names of db like this 
    //in our querry
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};
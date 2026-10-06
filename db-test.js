const { MongoClient } = require('mongodb'); 
 
const MONGO_URL = 'mongodb://127.0.0.1:27017'; 
const DATABASE_NAME = 'account-db'; 
 
async function main() { 
  const client = new MongoClient(MONGO_URL); 
  await client.connect(); 
  console.log('เชื่อมต่อ MongoDB ส ำเร็จ'); 
 
  const db = client.db(DATABASE_NAME); 
  const users = db.collection('users'); 
  console.log('จ ำนวนสมำชิก:', await users.countDocuments()); 
 
  await client.close(); 
} 
 
main().catch(console.error);
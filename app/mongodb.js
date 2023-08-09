import { MongoClient } from 'mongodb';

const uri = 'your-mongodb-connection-uri';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    if (!client.isConnected()) {
        await client.connect();
    }
    return client.db('your-database-name');
}

export { connectToDatabase };

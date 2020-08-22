import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

if (process.env.SUNNY_DAY_CONNECTION === undefined || process.env.SUNNY_DAY_CONNECTION === '') {
    console.error('No database connection given');
    process.exit(1);
}
const client = new MongoClient(process.env.SUNNY_DAY_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

if (process.env.DATABASE === undefined || process.env.DATABASE === '') {
    console.error('No database given');
    process.exit(2);
}
async function database(req, res, next) {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db(process.env.DATABASE);
    return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;

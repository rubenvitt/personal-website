import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { Db } from 'mongodb';

interface ExtendedRequest extends NextApiRequest {
    db: Db;
}

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req: ExtendedRequest, res: NextApiResponse) => {
    const doc = await req.db.collection('work-items').find({}).toArray();
    res.json(doc);
});

export default handler;

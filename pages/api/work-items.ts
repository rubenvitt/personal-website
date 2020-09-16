import { NextApiRequest, NextApiResponse } from 'next';
import * as workList from '../../data/work-items.list';

export default (req: NextApiRequest, res: NextApiResponse): void => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(fetch('http://localhost:3004/api/work-items/'));
    fetch('http://localhost:3004/api/work-items/').then((r) => {
        res.status(200).send(r.body);
    });
    //res.status(200).send(workList.workList);
};

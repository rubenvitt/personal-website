import {NextApiRequest, NextApiResponse} from 'next';
import * as workList from '../../data/work-items.list';

export default (req: NextApiRequest, res: NextApiResponse): void => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(workList.workList);
};

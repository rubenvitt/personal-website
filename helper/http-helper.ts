import { WorkModel } from '../data/work-items.list';

export const fetchWorkItems = async (): Promise<WorkModel[]> => {
    return fetch(process.env.API_HOST + '/api/work-items/').then((r) => r.json());
};

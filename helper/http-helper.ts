import { WorkModel } from '../data/work-items.list';
import { Skill } from '../data/skill-items.list';

export const fetchWorkItems = async (): Promise<WorkModel[]> => {
    return fetch(process.env.API_HOST + '/api/work-items/').then((r) => r.json());
};

export const fetchSkillItems = async (): Promise<Skill[]> => {
    return fetch(process.env.API_HOST + '/api/skill-items/').then((r) => r.json());
};

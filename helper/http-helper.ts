import { WorkModel } from '../types/work-items.types';
import { Skill } from '../types/skill-items.types';

export const fetchWorkItems = async (): Promise<WorkModel[]> => {
    return fetch(process.env.API_HOST + '/api/work-items/').then((r) => r.json());
};

export const fetchSkillItems = async (): Promise<Skill[]> => {
    return fetch(process.env.API_HOST + '/api/skill-items/').then((r) => r.json());
};

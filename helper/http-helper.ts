import { WorkModel } from '../types/work-items.types';
import { Skill } from '../types/skill-items.types';
import { StudyModel } from '../data/study-items.list';
import { PortfolioModel } from '../types/portfolio-items.types';

export const fetchWorkItems = async (): Promise<WorkModel[]> => {
    return fetch(process.env.API_HOST + '/api/work-items/').then((r) => r.json());
};

export const fetchSkillItems = async (): Promise<Skill[]> => {
    return fetch(process.env.API_HOST + '/api/skill-items/').then((r) => r.json());
};

export const fetchStudyItems = async (): Promise<StudyModel[]> => {
    return fetch(process.env.API_HOST + '/api/edu-items/').then((r) => r.json());
};

export const fetchPortfolioItems = async (): Promise<PortfolioModel[]> => {
    return fetch(process.env.API_HOST + '/api/portfolio-items').then((r) => r.json());
};

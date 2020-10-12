import { WorkModel } from '../types/work-items.types';
import { Skill } from '../types/skill-items.types';
import { StudyModel } from '../data/study-items.list';
import { PortfolioModel } from '../types/portfolio-items.types';
import { GraphQLClient } from 'graphql-request';

export const fetchWorkItems = async (client: GraphQLClient): Promise<WorkModel[]> => {
    return await client
        .request(
            `
    {
        works(stage:DRAFT) {
            id, position, duration, responsibilities, image, summary, place
        }
    }
    `,
        )
        .then((value) => value.works);
};

export const fetchSkillItems = async (client: GraphQLClient): Promise<Skill[]> => {
    return await client
        .request(
            `
    {
        skills(stage:DRAFT) {
            id, title, level, skillDirection, type, tag, certificates {
              id, title, url, date, platform, author
            }
        }
    }
    `,
        )
        .then((value) => value.skills);
};

export const fetchStudyItems = async (): Promise<StudyModel[]> => {
    return [];
};

export const fetchPortfolioItems = async (): Promise<PortfolioModel[]> => {
    return fetch(process.env.API_HOST + '/api/portfolio-items').then((r) => r.json());
};

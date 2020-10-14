import { WorkModel } from '../types/work-items.types';
import { Skill } from '../types/skill-items.types';
import { StudyModel } from '../data/study-items.list';
import { PortfolioItemType, PortfolioModel } from '../types/portfolio-items.types';
import { GraphQLClient } from 'graphql-request';
import { element } from 'prop-types';

export const fetchWorkItems = async (client: GraphQLClient): Promise<WorkModel[]> => {
    return await client
        .request(
            `
    {
    works(stage:DRAFT) {
        id, position, duration, responsibilities, image, summary, place, 
        company {name, url},
        technologies { ... on Skill { id, title }, ... on Framework { id title } }
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

export const fetchPortfolioItems = async (client: GraphQLClient): Promise<PortfolioModel[]> => {
    const parsePortfolioItemType = (type: string) => {
        type = type.toLowerCase();
        let result = undefined;
        switch (type) {
            case 'favorite':
                result = PortfolioItemType.FAVORITE;
                break;
            case 'archive':
                result = PortfolioItemType.ARCHIVE;
                break;
            case 'online':
                result = PortfolioItemType.ONLINE;
                break;
        }
        console.log(`calculated result: ${result}`);
        return result;
    };

    return await client
        .request(
            `
{
  portfolioItems(stage: DRAFT) {
    id
    title
    url
    portfolioItemType
    abbr
    linesOfCode
    langs {
      __typename
      ... on Skill {
        id
        title
      }
      ... on Framework {
        id
        title
      }
    }
  }
}
    `,
        )
        .then((data) => data.portfolioItems)
        .then((data) => {
            return data.map((element) => {
                element.portfolioItemType = parsePortfolioItemType(element.portfolioItemType);
                return element;
            });
        });
};

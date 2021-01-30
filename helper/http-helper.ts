import { WorkModel } from '../types/work-items.types';
import { Certificate, Skill } from '../types/skill-items.types';
import { StudyModel } from '../data/study-items.list';
import { PortfolioItemType, PortfolioModel } from '../types/portfolio-items.types';
import { GraphQLClient } from 'graphql-request';
import { BlogItem } from '../types/blog-items.types';
import { isPreview } from './global-helper';

export const fetchWorkItems = async (client: GraphQLClient): Promise<WorkModel[]> => {
    return await client
        .request(
            `
    {
    works ${isPreview ? '(stage: DRAFT)' : ''} {
        id, position, duration, responsibilities, image, shortSummary, summary, place, 
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
        skills ${isPreview ? '(stage: DRAFT)' : ''} {
            id, title, level, skillDirection, type, tag, svg, certificates {
              id, title, url, date, platform, author
            }
        }
    }
    `,
        )
        .then((value) => value.skills);
};

export const fetchCertItems = async (client: GraphQLClient): Promise<Certificate[]> => {
    return await client
        .request(
            `
    {
        certificates ${isPreview ? '(stage: DRAFT)' : ''} {
            date
            id
            title
            url
        }
    }
    `,
        )
        .then((value) => {
            return value.certificates;
        });
};

export const fetchStudyItems = async (client: GraphQLClient): Promise<StudyModel[]> => {
    return await client
        .request(
            `
{
  studies ${isPreview ? '(stage: DRAFT)' : ''} {
    duration
    id
    studyStatus
    subject
    university
    courses
    degree
    url
  }
}
    `,
        )
        .then((value) => value.studies);
};

export const fetchPortfolioItems = async (client: GraphQLClient): Promise<PortfolioModel[]> => {
    const parsePortfolioItemType = (type: string) => {
        type = type?.toLowerCase();
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
            case undefined:
                result = null;
                break;
        }
        return result;
    };

    return await client
        .request(
            `
{
  portfolioItems ${isPreview ? '(stage: DRAFT)' : ''} {
    id
    title
    url
    portfolioItemType
    abbr
    linesOfCode
    liveUrl
    githubUrl
    startDate
    endDate
    description
    image {
      url
    }
    langs {
      __typename
      ... on Skill {
        id
        title
        level
        skillDirection
        type
        svg
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
                element.image = element.image?.url ?? null;
                return element;
            });
        });
};

export const fetchBlogItems = async (client: GraphQLClient): Promise<BlogItem[]> => {
    return await client
        .request(
            `
{
  posts ${isPreview ? '(stage: DRAFT)' : ''} {
    id: slug
    title
    shortDescription
    readMinutes
    language
    type
    externalInfo {
      url
      source
    }
    published
    updatedAt
  }
}
    `,
        )
        .then((value) => {
            return value.posts;
        });
};

export const fetchPostAndMorePosts = async (
    client: GraphQLClient,
    pid,
): Promise<{ post: BlogItem; morePosts: BlogItem[] }> => {
    return await client
        .request(
            `
{
  post(where: {slug: "${escape(pid)}"}${isPreview ? ', stage: DRAFT' : ''}) {
    id: slug
    language
    published
    publishedAt
    readMinutes
    shortDescription
    stage
    title
    type
    content
  }
  morePosts: posts(first: 3) {
    id: slug
    language
    published
    publishedAt
    readMinutes
    shortDescription
    stage
    title
    type
  }
}
    `,
        )
        .then((value) => {
            return {
                post: value.post,
                morePosts: value.morePosts,
            };
        });
};

import { Skill } from './skill-items.types';

export class PortfolioModel {
    id: string;
    title: string;
    portfolioItemType: PortfolioItemType;
    url: string;
    abbr: string;
    linesOfCode?: number;
    langs?: Skill[];
    image?: string;
    liveUrl?: string;
    description: string;
    githubUrl: string;

    constructor(
        abbr: string,
        title: string,
        portfolioItemType: PortfolioItemType,
        url: string,
        langs?: Skill[],
        linesOfCode?: number,
    ) {
        this.abbr = abbr;
        this.title = title;
        this.portfolioItemType = portfolioItemType;
        this.url = url;
        this.linesOfCode = linesOfCode;
        this.langs = langs;
    }
}

export enum PortfolioItemType {
    FAVORITE = 3,
    ONLINE = 2,
    //Empty = 1
    ARCHIVE = 0,
}

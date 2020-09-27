export class PortfolioModel {
    title: string;
    portfolioItemType: PortfolioItemType;
    url: string;
    abbr: string;
    linesOfCode?: number;
    langs?: string[];

    constructor(
        abbr: string,
        title: string,
        portfolioItemType: PortfolioItemType,
        url: string,
        langs?: string[],
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

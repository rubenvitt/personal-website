export class PortfolioItem {
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

export const portfolioList: () => PortfolioItem[] = () => [
    new PortfolioItem('KIW', 'Kids im Wald', PortfolioItemType.ONLINE, 'https://kids-im-wald.de'),
    new PortfolioItem('WPR', 'WordPress Rubeen.one', PortfolioItemType.FAVORITE, 'https://rubeen.one'),
];

export enum PortfolioItemType {
    ONLINE = 'ONLINE',
    ARCHIVE = 'ARCHIVE',
    FAVORITE = 'FAVORITE',
}

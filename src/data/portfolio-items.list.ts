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
    new PortfolioItem('KIW', 'Kids im Wald', PortfolioItemType.ONLINE, 'https://portfolio.rubeen.dev/portfolios/7'),
    new PortfolioItem(
        'WPR',
        'WordPress Rubeen.one',
        undefined,
        'https://portfolio.rubeen.dev/portfolios/5',
    ),
    new PortfolioItem(
        'RWS',
        'rubeen.one Website',
        PortfolioItemType.FAVORITE,
        'https://portfolio.rubeen.dev/portfolios/14',
        ['TypeScript', 'JavaScript', 'CSS'],
        26976,
    ),
    new PortfolioItem(
        'RRP',
        'RubyOnRails Portfolio',
        PortfolioItemType.ONLINE,
        'https://portfolio.rubeen.dev/portfolios/9',
        ['Ruby', 'HTML', 'CSS', 'JavaScript', 'Dockerfile'],
        13141,
    ),
    new PortfolioItem(
        'PRT',
        'Proxy Template',
        undefined,
        'https://portfolio.rubeen.dev/portfolios/6',
        ['Shell', 'Dockerfile'],
        323,
    ),
    new PortfolioItem(
        'WPP',
        'Passwortgenerator WP',
        PortfolioItemType.ARCHIVE,
        'https://portfolio.rubeen.dev/portfolios/13',
        ['C#'],
        1192235,
    ),
    new PortfolioItem(
        'APG',
        'Passwortgenerator Android',
        PortfolioItemType.ARCHIVE,
        'https://portfolio.rubeen.dev/portfolios/10',
        ['Java'],
        860,
    ),
    new PortfolioItem(
        'DDA',
        'Dein Deichrad Android',
        PortfolioItemType.ARCHIVE,
        'https://portfolio.rubeen.dev/portfolios/11',
        ['Java'],
    ),
    new PortfolioItem(
        'MSA',
        'Meeting scheduling application',
        PortfolioItemType.FAVORITE,
        'https://portfolio.rubeen.dev/portfolios/12',
        ['HTML', 'Java', 'CSS', 'JavaScript', 'Kotlin'],
        34745,
    ),
    new PortfolioItem(
        'TBC',
        'Terminal Business Card',
        PortfolioItemType.ONLINE,
        'https://portfolio.rubeen.dev/portfolios/8',
        ['Typescript', 'HTML', 'CSS', 'Dockerfile'],
        16449,
    ),
];

export enum PortfolioItemType {
    FAVORITE = 3,
    ONLINE = 2,
    //Empty = 1
    ARCHIVE = 0,
}

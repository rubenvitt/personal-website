export class PortfolioItem {
    title: string;


    constructor(title: string) {
        this.title = title;
    }
}

export const portfolioList: () => [PortfolioItem] = () => [
    new PortfolioItem('Test-Titel')
    ]

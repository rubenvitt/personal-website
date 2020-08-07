export class MenuListItem {
    title: string;
    url: string;

    constructor(title: string, url: string) {
        this.title = title;
        this.url = url;
    }
}

export const MenuList = [
    new MenuListItem('Main', '/'),
    new MenuListItem('Resume', '/cv'),
    new MenuListItem('Portfolio', '/portfolio'),
    new MenuListItem('Contact', '/contact'),
];

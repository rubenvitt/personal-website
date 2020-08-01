export class MenuListItem {

    title: string;
    url: string;

    constructor(title: string, url: string) {
        this.title = title;
        this.url = url;
    }
}

export const MenuList = (t) => [
    new MenuListItem(t('nav.main_page'), '/'),
    new MenuListItem(t('nav.cv'), '/cv'),
    new MenuListItem(t('nav.portfolio'), '/portfolio'),
    new MenuListItem(t('nav.contact'), '/contact'),
]

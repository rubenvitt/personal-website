import { DurationItem } from '../helper/DateCalculator';
import { TFunction } from 'next-i18next';

export class Study {
    subject: string;
    university: string;
    duration: DurationItem;
    status: Status;
    courses: string[];
    degree: string;
    url: string;

    constructor(
        subject: string,
        university: string,
        degree: string,
        duration: DurationItem,
        status: Status,
        courses: string[],
        url: string,
    ) {
        this.subject = subject;
        this.university = university;
        this.duration = duration;
        this.status = status;
        this.courses = courses;
        this.degree = degree;
        this.url = url;
    }
}

export enum Status {
    COMPLETED = 'COMPLETED',
    INCOMPLETE = 'INCOMPLETE',
    SWITCHED = 'SWITCHED',
}

export const studyList = (t: TFunction): Study[] => {
    return [
        new Study(
            t('education.suderburg.subject'),
            t('education.suderburg.university'),
            t('education.suderburg.degree'),
            {
                start: new Date(2015, 8, 1),
                end: new Date(2016, 6, 31),
            },
            Status.SWITCHED,
            [t('education.suderburg.courses.course_1'), 'this', 'and this'],
            'https://ostfalia.de/b',
        ),
        new Study(
            t('education.wolfenbüttel.subject'),
            t('education.wolfenbüttel.university'),
            t('education.wolfenbüttel.degree'),
            {
                start: new Date(2016, 8, 1),
                end: new Date(2019, 6, 31),
            },
            Status.COMPLETED,
            ['this', 'this', 'and this'],
            'https://ostfalia.de/i',
        ),
        new Study(
            t('education.hagen.subject'),
            t('education.hagen.university'),
            t('education.hagen.degree'),
            {
                start: new Date(2019, 8, 1),
                end: new Date(2020, 0, 31),
            },
            Status.INCOMPLETE,
            ['this', 'this', 'and this'],
            'https://fernuni-hagen.de',
        ),
    ];
};

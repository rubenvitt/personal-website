import { DurationItem } from '../helper/date-calculator';

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
    COMPLETED = 'completed',
    INCOMPLETE = 'incomplete',
    SWITCHED = 'switched',
}

export const studyList = [
    new Study(
        'Applied Computer Science',
        'Ostfalia Suderburg',
        'Bachelor of Science',
        {
            start: new Date(2015, 8, 1),
            end: new Date(2016, 6, 31),
        },
        Status.SWITCHED,
        ['THIS', 'this', 'and this'],
        'https://ostfalia.de/b',
    ),
    new Study(
        'Computer Science',
        'Ostfalia Wolfenbüttel',
        'Bachelor of Science',
        {
            start: new Date(2016, 8, 1),
            end: new Date(2019, 6, 31),
        },
        Status.COMPLETED,
        ['this', 'this', 'and this'],
        'https://ostfalia.de/i',
    ),
    new Study(
        'Computer Science',
        'FernUni Hagen',
        'Master of Science',
        {
            start: new Date(2019, 8, 1),
            end: new Date(2020, 0, 31),
        },
        Status.INCOMPLETE,
        ['this', 'this', 'and this'],
        'https://fernuni-hagen.de',
    ),
];

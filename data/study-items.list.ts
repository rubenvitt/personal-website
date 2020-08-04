import { DurationItem } from '../helper/DateCalculator';

export class Study {
    subject: string;
    university: string;
    duration: DurationItem;
    status: Status;
    courses: string[];
    degree: string;

    constructor(
        subject: string,
        university: string,
        degree: string,
        duration: DurationItem,
        status: Status,
        courses: string[],
    ) {
        this.subject = subject;
        this.university = university;
        this.duration = duration;
        this.status = status;
        this.courses = courses;
        this.degree = degree;
    }
}

export enum Status {
    COMPLETED = 'COMPLETED',
    INCOMPLETE = 'INCOMPLETE',
    SWITCHED = 'SWITCHED',
}

export const studyList = (): Study[] => {
    return [
        new Study(
            'Applied Computer Science',
            'Ostfalia Suderburg',
            'Bachelor of Science',
            {
                start: new Date(2015, 8, 1),
                end: new Date(2016, 6, 31),
            },
            Status.SWITCHED,
            ['this', 'this', 'and this'],
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
        ),
        new Study(
            'Computer Science',
            'Fernuni Hagen',
            'Master of Science',
            {
                start: new Date(2019, 8, 1),
                end: new Date(2020, 0, 31),
            },
            Status.INCOMPLETE,
            ['this', 'this', 'and this'],
        ),
    ];
};

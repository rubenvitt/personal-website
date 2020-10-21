import { DurationItem } from '../helper/date-calculator';

export class StudyModel {
    subject: string;
    university: string;
    duration: DurationItem;
    studyStatus: Status;
    courses: string[];
    degree: string;
    url: string;

    constructor(
        subject: string,
        university: string,
        degree: string,
        duration: DurationItem,
        studyStatus: Status,
        courses: string[],
        url: string,
    ) {
        this.subject = subject;
        this.university = university;
        this.duration = duration;
        this.studyStatus = studyStatus;
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

export const studyList = [];

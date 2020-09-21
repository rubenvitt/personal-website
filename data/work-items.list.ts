import { DurationItem } from '../helper/date-calculator';

export class WorkModel {
    position: string;
    company: string;
    responsibilities: string[] = [];
    technologies: string[] = [];
    duration: DurationItem;
    image: string;
    summary: string;
}

export const workList = [
    {
        position: 'Associate Consultant',
        company: 'fme AG',
        place: 'Braunschweig, Germany',
        responsibilities: [
            'Application Development',
            'Consulting',
            'DevOp',
            'Continuous Integration & Delivery (CI/CD)',
            'Kubernetes Cluster',
            'Internal Projects',
        ],
        technologies: ['Java & Kotlin', 'JavaScript & Typescript', 'Postgres & Oracle DB', 'Docker & Kubernetes'],
        duration: {
            start: new Date(2019, 9, 5),
        },
        image: '/assets/images/work/fme-02.jpg',
        summary:
            'Working remotely for a really nice company located in Braunschweig. Application Development & Consulting as Fullstack Developer.',
    },
    {
        position: 'Junior Software Developer',
        company: 'dotSource GmbH',
        place: 'Leipzig, Germany',
        responsibilities: ['Extension Bugfixing', 'Extension Development'],
        technologies: ['Java'],
        duration: {
            start: new Date(2019, 8, 1),
            end: new Date(2019, 9, 15),
        },
        image: '/assets/images/work/dotsource.jpg',
        summary: 'First position after my degree in Leipzig. Application Development in an e-commerce environment.',
    },
    {
        position: 'Student',
        company: 'fme AG',
        place: 'Braunschweig, Germany',
        responsibilities: [
            'Subversion -> GitLab Migration',
            'Introduction Code-Search',
            'GitLab administration',
            'Bachelor thesis',
            'GitLab compliance app',
        ],
        technologies: ['Docker', 'Java', 'JavaScript', 'Bash + Batch', 'REST'],
        duration: {
            start: new Date(2018, 5, 1),
            end: new Date(2019, 7, 31),
        },
        image: '/assets/images/work/fme-01.jpg',
        summary:
            'I was responsible for a larger migration project, introduced a codesearch-system, implemented a Gitlab-Compliance app and wrote my thesis.',
    },
    {
        position: 'Working Student',
        company: 'Elektrobit',
        place: 'Braunschweig, Germany',
        responsibilities: ['HMI-Development', 'UI-Scripts', 'UI Implementation'],
        technologies: ['EB-Guide', 'Java'],
        duration: {
            start: new Date(2017, 1, 15),
            end: new Date(2018, 4, 30),
        },
        image: '/assets/images/work/elektrobit.jpg',
        summary:
            'Implementation of design-specifications including writing of small Java scripts for UI-interactions for inbuilt car-navigation systems.',
    },
    {
        position: 'Student Assistant',
        company: 'Ostfalia',
        place: 'Suderburg, Germany',
        responsibilities: ['Project Management', 'Project Planning'],
        technologies: ['Windows 10 iot', 'Smart Home management FrontEnds'],
        duration: {
            start: new Date(2015, 11, 1),
            end: new Date(2016, 7, 31),
        },
        image: '/assets/images/work/ostfalia.jpg',
        summary:
            'Helping-Hand for planning a sensor-network project & project management in the starting-phase of a smart home project.',
    },
    {
        position: 'Disk Jockey',
        company: 'Self Employed | Rubeen',
        place: 'Salzgitter, Germany',
        responsibilities: ['finances', 'marketing', 'music', 'contracts'],
        technologies: ['Traktor', 'Hardware'],
        duration: {
            start: new Date(2015, 1, 1),
            end: new Date(2016, 1, 31),
        },
        image: '/assets/images/work/dj.jpg',
        summary:
            'As a DJ I learned alot about self-marketing, organisation & writing contracts. Also I improved my personal soft-skills.',
    },
];
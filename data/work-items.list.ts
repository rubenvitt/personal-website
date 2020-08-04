import { DurationItem } from '../helper/DateCalculator';
import { TFunction } from 'next-i18next';

export class WorkModel {
    position: string;
    company: string;
    responsibilities: string[] = [];
    technologies: string[] = [];
    duration: DurationItem;
    image: string;
    summary: string;
}

export const workList: (t: TFunction) => WorkModel[] = (t) => [
    {
        position: t('work.fme-2.position'),
        company: t('work.fme-2.company'),
        responsibilities: [
            t('work.fme-2.res.app_dev'),
            t('work.fme-2.res.consulting'),
            t('work.fme-2.res.devop'),
            t('work.fme-2.res.cicd'),
            t('work.fme-2.res.kubernetes'),
            t('work.fme-2.res.internal'),
        ],
        technologies: ['Java & Kotlin', 'JavaScript & Typescript', 'Postgres & Oracle DB', 'Docker & Kubernetes'],
        duration: {
            start: new Date(2019, 9, 5),
        },
        image: '/assets/images/work/fme-02.jpg',
        summary: t('work.fme-2.summary'),
    },
    {
        position: t('work.dotsource.position'),
        company: t('work.dotsource.company'),
        responsibilities: [t('work.dotsource.res.bugfix'), t('work.dotsource.res.dev')],
        technologies: ['Java'],
        duration: {
            start: new Date(2019, 8, 1),
            end: new Date(2019, 9, 15),
        },
        image: '/assets/images/work/dotsource.jpg',
        summary: t('work.dotsource.summary'),
    },
    {
        position: t('work.fme-1.position'),
        company: t('work.fme-1.company'),
        responsibilities: [
            t('work.fme-1.res.svngitlab'),
            t('work.fme-1.res.codesearch'),
            t('work.fme-1.res.gitlabadmin'),
            t('work.fme-1.res.bachelor'),
            t('work.fme-1.res.gitlabcompliance'),
        ],
        technologies: ['Docker', 'Java', 'JavaScript', 'Bash + Batch', 'REST'],
        duration: {
            start: new Date(2018, 5, 1),
            end: new Date(2019, 7, 31),
        },
        image: '/assets/images/work/fme-01.jpg',
        summary: t('work.fme-1.summary'),
    },
    {
        position: t('work.elektrobit.position'),
        company: t('work.elektrobit.company'),
        responsibilities: [
            t('work.elektrobit.res.hmi'),
            t('work.elektrobit.res.uiscripts'),
            t('work.elektrobit.res.uiimpl'),
        ],
        technologies: ['EB-Guide', 'Java'],
        duration: {
            start: new Date(2017, 1, 15),
            end: new Date(2018, 4, 30),
        },
        image: '/assets/images/work/elektrobit.jpg',
        summary: t('work.elektrobit.summary'),
    },
    {
        position: t('work.ostfalia.position'),
        company: t('work.ostfalia.company'),
        responsibilities: [t('work.ostfalia.res.management'), t('work.ostfalia.res.planning')],
        technologies: ['Windows 10 iot', 'Smart Home management FrontEnds'],
        duration: {
            start: new Date(2015, 11, 1),
            end: new Date(2016, 7, 31),
        },
        image: '/assets/images/work/ostfalia.jpg',
        summary: t('work.ostfalia.summary'),
    },
    {
        position: t('work.dj.position'),
        company: t('work.dj.company'),
        responsibilities: [
            t('work.dj.res.finances'),
            t('work.dj.res.marketing'),
            t('work.dj.res.music'),
            t('work.dj.res.contracts'),
        ],
        technologies: ['Traktor', 'Hardware'],
        duration: {
            start: new Date(2015, 1, 1),
            end: new Date(2016, 1, 31),
        },
        image: '/assets/images/work/dj.jpg',
        summary: t('work.dj.summary'),
    },
];

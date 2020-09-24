import React from 'react';
import { Icons } from './icons/icons';

export enum SkillType {
    ProgrammingLanguage = 'Programming Language',
    HumanLanguage = 'Human Language',
    Certificate = 'Certificate',
    SoftSkill = 'Soft Skill',
    TechnicalSkill = 'Technical Skill',
}

export enum SkillDirection {
    UP = 'UP',
    UNCHANGED = 'UNCHANGED',
    DOWN = 'DOWN',
    NA = 'NA',
}

export abstract class Skill {
    title: string;
    svg: string;
    value: number;
    type: SkillType;
    status: SkillDirection;
    certificates?: Certificate[];

    protected constructor(
        title: string,
        svg: string,
        value: number,
        type: SkillType,
        status: SkillDirection,
        certificates?: Certificate[],
    ) {
        this.title = title;
        this.svg = svg;
        this.value = value;
        this.type = type;
        this.status = status;
        this.certificates = certificates;
    }
}

export class TaggedSkill extends Skill {
    tag: string;

    constructor(
        title: string,
        svg: string,
        value: number,
        type: SkillType,
        status: SkillDirection,
        tag: string,
        certificates?: Certificate[],
    ) {
        super(title, svg, value, type, status, certificates);
        this.tag = tag;
    }
}

export class CertificateSkill extends Skill {
    date: Date;

    constructor(title: string, svg: string, value: number, type: SkillType, date: Date, certificates?: Certificate[]) {
        super(title, svg, value, type, SkillDirection.NA, certificates);
        this.date = date;
    }
}

class Certificate {
    title: string;
    url: string;
    date: Date;

    constructor(title: string, url: string, date: Date) {
        this.title = title;
        this.url = url;
        this.date = date;
    }
}

export class ProgrammingLanguageSkill extends Skill {
    frameworks?: string[];

    constructor(
        title: string,
        svg: string,
        value: number,
        type: SkillType,
        status: SkillDirection,
        certificates?: Certificate[],
        frameworks?: string[],
    ) {
        super(title, svg, value, type, status, certificates);
        this.frameworks = frameworks;
    }
}

export class GenericSkill extends Skill {
    constructor(
        title: string,
        svg: string,
        value: number,
        type: SkillType,
        status: SkillDirection,
        certificates?: Certificate[],
    ) {
        super(title, svg, value, type, status, certificates);
    }
}

export const skillList: ProgrammingLanguageSkill[] = [
    //Tagged skills
    new TaggedSkill('Kubernetes', Icons.Kubernetes, 60, SkillType.TechnicalSkill, SkillDirection.UP, 'Container', [
        new Certificate(
            'Bred Fisher (Kubernetes Mastery)',
            'https://www.udemy.com/certificate/UC-e1f401f9-e7a5-453d-ad28-3a813c5533f9/',
            new Date('2020-05-15'),
        ),
    ]),
    new TaggedSkill('Docker', Icons.Docker, 95, SkillType.TechnicalSkill, SkillDirection.UP, 'Container', [
        new Certificate(
            'Bred Fisher (Docker Mastery)',
            'https://www.udemy.com/certificate/UC-e66c9add-c0eb-4df6-a1a3-54e38fc4a452/',
            new Date('2020-05-09'),
        ),
    ]),
    new TaggedSkill('Docker swarm', Icons.Docker, 30, SkillType.TechnicalSkill, SkillDirection.DOWN, 'Container'),
    new TaggedSkill('Jive', Icons.Cloud, 80, SkillType.TechnicalSkill, SkillDirection.UP, 'Software'),
    new TaggedSkill('Wordpress', Icons.WordPress, 90, SkillType.TechnicalSkill, SkillDirection.UNCHANGED, 'Software'),
    new TaggedSkill('EB Guide', Icons.Computer, 40, SkillType.TechnicalSkill, SkillDirection.DOWN, 'Software'),
    new TaggedSkill('SAP S4/Hana', Icons.SAP, 20, SkillType.TechnicalSkill, SkillDirection.DOWN, 'Software'),
    new TaggedSkill('SAP Commerce Cloud', Icons.SAP, 10, SkillType.TechnicalSkill, SkillDirection.DOWN, 'Software'),
    new TaggedSkill(
        'FullStack Development',
        Icons.FullTrays,
        98,
        SkillType.TechnicalSkill,
        SkillDirection.UP,
        'Dev-Role',
    ),
    new TaggedSkill(
        'FrontEnd Development',
        Icons.PaintBrush,
        60,
        SkillType.TechnicalSkill,
        SkillDirection.UP,
        'Dev-Role',
    ),
    new TaggedSkill('BackEnd Development', Icons.Cloud, 98, SkillType.TechnicalSkill, SkillDirection.UP, 'Dev-Role'),
    new TaggedSkill('DevOp', Icons.CloudCircle, 50, SkillType.TechnicalSkill, SkillDirection.UP, 'Dev-Role'),
    new TaggedSkill('Scrum • Kanban', Icons.Team, 98, SkillType.SoftSkill, SkillDirection.UP, 'Methodology'),
    new TaggedSkill('HomeOffice', Icons.Home, 95, SkillType.SoftSkill, SkillDirection.UP, 'Methodology'),
    new TaggedSkill('IT-Security', Icons.Lock, 65, SkillType.TechnicalSkill, SkillDirection.UP, 'IT topic'),
    new TaggedSkill('Design Thinking', Icons.Crop, 20, SkillType.SoftSkill, SkillDirection.UNCHANGED, 'Methodology'),
    new TaggedSkill('Teamwork', Icons.Team, 98, SkillType.SoftSkill, SkillDirection.UP, 'Soft Skill'),
    new TaggedSkill('Conflict Management', Icons.Lightning, 95, SkillType.SoftSkill, SkillDirection.UP, 'Soft Skill'),
    new TaggedSkill('Organisation', Icons.List, 99, SkillType.SoftSkill, SkillDirection.UP, 'Soft Skill'),
    new TaggedSkill('Problem Solving', Icons.ProblemSolving, 96, SkillType.SoftSkill, SkillDirection.UP, 'Soft Skill'),
    new TaggedSkill('Moderation', Icons.Graph, 60, SkillType.SoftSkill, SkillDirection.UNCHANGED, 'Soft Skill'),
    new TaggedSkill(
        'Jetbrains (IntelliJ)',
        Icons.IntelliJ,
        100,
        SkillType.TechnicalSkill,
        SkillDirection.UP,
        'Dev-Tool',
    ),

    new TaggedSkill('GitLab (CI/CD)', Icons.GitLab, 90, SkillType.TechnicalSkill, SkillDirection.UP, 'Dev-Tool'),
    new TaggedSkill('GitHub', Icons.GitHub, 80, SkillType.TechnicalSkill, SkillDirection.UP, 'Dev-Tool'),
    new TaggedSkill('Jenkins', Icons.Jenkins, 33, SkillType.TechnicalSkill, SkillDirection.UNCHANGED, 'Dev-Tool'),
    new TaggedSkill('Eclipse', Icons.Eclipse, 30, SkillType.TechnicalSkill, SkillDirection.DOWN, 'Dev-Tool'),
    new TaggedSkill('Project Management', Icons.Graph, 35, SkillType.SoftSkill, SkillDirection.UP, 'IT topic'),
];

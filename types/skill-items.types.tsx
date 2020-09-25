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

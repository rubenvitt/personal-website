export enum SkillType {
    ProgrammingLanguage = 'ProgrammingLanguage',
    HumanLanguage = 'HumanLanguage',
    Certificate = 'Certificate',
    SoftSkill = 'SoftSkill',
    TechnicalSkill = 'TechnicalSkill',
}

export enum SkillDirection {
    UP = 'UP',
    UNCHANGED = 'UNCHANGED',
    DOWN = 'DOWN',
    NA = 'NA',
}

export abstract class Skill {
    id: string;
    title: string;
    svg: string;
    level: number;
    type: SkillType;
    skillDirection: SkillDirection;
    certificates?: Certificate[];

    protected constructor(
        title: string,
        svg: string,
        level: number,
        type: SkillType,
        status: SkillDirection,
        certificates?: Certificate[],
    ) {
        this.title = title;
        this.svg = svg;
        this.level = level;
        this.type = type;
        this.skillDirection = status;
        this.certificates = certificates;
    }
}

export class TaggedSkill extends Skill {
    tag: string;

    constructor(
        title: string,
        svg: string,
        level: number,
        type: SkillType,
        status: SkillDirection,
        tag: string,
        certificates?: Certificate[],
    ) {
        super(title, svg, level, type, status, certificates);
        this.tag = tag;
    }
}

export class CertificateSkill extends Skill {
    date: Date;

    constructor(title: string, svg: string, level: number, type: SkillType, date: Date, certificates?: Certificate[]) {
        super(title, svg, level, type, SkillDirection.NA, certificates);
        this.date = date;
    }
}

export class Certificate {
    id: string;
    title: string;
    url: string;
    date: Date;
    platform: string;
    author: string;
}

export class ProgrammingLanguageSkill extends Skill {
    frameworks?: string[];

    constructor(
        title: string,
        svg: string,
        level: number,
        type: SkillType,
        status: SkillDirection,
        certificates?: Certificate[],
        frameworks?: string[],
    ) {
        super(title, svg, level, type, status, certificates);
        this.frameworks = frameworks;
    }
}

export class GenericSkill extends Skill {
    constructor(
        title: string,
        svg: string,
        level: number,
        type: SkillType,
        status: SkillDirection,
        certificates?: Certificate[],
    ) {
        super(title, svg, level, type, status, certificates);
    }
}

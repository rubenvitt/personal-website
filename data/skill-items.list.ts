export enum SkillType {
    ProgrammingLanguage = 'Programming Language'
}

export enum SkillDirection {
    UP = 'IMPROVED',
    UNCHANGED = 'UNCHANGED',
    DOWN = 'NOT USED'
}

export abstract class Skill {
    title: string;
    svg: string;
    value: number;
    type: SkillType;
    status: SkillDirection;
    certificates?: Certificate[]


    constructor(title: string, svg: string, value: number, type: SkillType, status: SkillDirection, certificates?: Certificate[]) {
        this.title = title;
        this.svg = svg;
        this.value = value;
        this.type = type;
        this.status = status;
        this.certificates = certificates;
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
    frameworks?: string[]


    constructor(title: string, svg: string, value: number, type: SkillType, status: SkillDirection, certificates?: Certificate[], frameworks?: string[]) {
        super(title, svg, value, type, status, certificates);
        this.frameworks = frameworks;
    }
}


export const skillList: (t) => (Skill)[] = (t) => {
    return [
        new ProgrammingLanguageSkill(
            'Java | Kotlin', 'M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639',
            100, SkillType.ProgrammingLanguage, SkillDirection.UP,
            [
                new Certificate(
                    "JetBrains (Coursera)", 'https://www.coursera.org/account/accomplishments/records/PLMNXAPJBE9U?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharebutton_course&utm_user=ac7ca8516080249ebb7e652afda8288433429dd7',
                    new Date(2020, 4, 23)
                )
            ],
            ['Spring Boot']
        ),
        new ProgrammingLanguageSkill(
            'Javascript | Typescript', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            100, SkillType.ProgrammingLanguage, SkillDirection.UP,
            undefined, [
                "Jest", "NodeJS", "Next.js", "Nest.js", "Prisma", "React"
            ]
        ),
        new ProgrammingLanguageSkill(
            'Bash | zsh', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            95, SkillType.ProgrammingLanguage, SkillDirection.UNCHANGED
        ),
        new ProgrammingLanguageSkill(
            'SQL', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            93, SkillType.ProgrammingLanguage, SkillDirection.UP
        ),
        new ProgrammingLanguageSkill(
            'Ruby', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            80, SkillType.ProgrammingLanguage, SkillDirection.DOWN, [
                new Certificate(
                    "Percival, Hossain (Udemy)",
                    "https://www.udemy.com/certificate/UC-f3a735d4-388f-4558-b6dd-19fb6925c834/",
                    new Date("2020-05-08")
                )
            ], [
                "Ruby On Rails"
            ]
        ),
        new ProgrammingLanguageSkill(
            'C#', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            75, SkillType.ProgrammingLanguage, SkillDirection.DOWN
        ),
        new ProgrammingLanguageSkill(
            'C', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            70, SkillType.ProgrammingLanguage, SkillDirection.UNCHANGED
        ),
        new ProgrammingLanguageSkill(
            'Visual Basic', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            20, SkillType.ProgrammingLanguage, SkillDirection.DOWN
        ),
        new ProgrammingLanguageSkill(
            'Batch & Powershell', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            40, SkillType.ProgrammingLanguage, SkillDirection.DOWN
        ),
        new ProgrammingLanguageSkill(
            'Swift', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            60, SkillType.ProgrammingLanguage, SkillDirection.UP
        ),
        new ProgrammingLanguageSkill(
            'Python', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            43, SkillType.ProgrammingLanguage, SkillDirection.DOWN
        ),
        new ProgrammingLanguageSkill(
            'PHP', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            25, SkillType.ProgrammingLanguage, SkillDirection.DOWN
        ),
        new ProgrammingLanguageSkill(
            'Haskell', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            30, SkillType.ProgrammingLanguage, SkillDirection.UNCHANGED
        ),
        new ProgrammingLanguageSkill(
            'Dart', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            10, SkillType.ProgrammingLanguage, SkillDirection.UNCHANGED
        ),
        new ProgrammingLanguageSkill(
            'C++', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            5, SkillType.ProgrammingLanguage, SkillDirection.UNCHANGED
        ),
        new ProgrammingLanguageSkill(
            'Go', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            25, SkillType.ProgrammingLanguage, SkillDirection.UP
        ),
        new ProgrammingLanguageSkill(
            'Matlab', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            3, SkillType.ProgrammingLanguage, SkillDirection.DOWN
        ),
        new ProgrammingLanguageSkill(
            'R', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            10, SkillType.ProgrammingLanguage, SkillDirection.DOWN
        ),
    ]
}

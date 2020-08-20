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
    UP = 'IMPROVED',
    UNCHANGED = 'UNCHANGED',
    DOWN = 'NOT USED',
    NA = 'N/A',
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
    // Programming languages
    new ProgrammingLanguageSkill(
        'Java | Kotlin',
        'M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639',
        100,
        SkillType.ProgrammingLanguage,
        SkillDirection.UP,
        [
            new Certificate(
                'JetBrains (Kotlin for Java Developers)',
                'https://www.coursera.org/account/accomplishments/records/PLMNXAPJBE9U?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharebutton_course&utm_user=ac7ca8516080249ebb7e652afda8288433429dd7',
                new Date(2020, 4, 23),
            ),
        ],
        ['Spring Boot'],
    ),
    new ProgrammingLanguageSkill(
        'Javascript | Typescript',
        'M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z',
        100,
        SkillType.ProgrammingLanguage,
        SkillDirection.UP,
        undefined,
        ['Jest', 'NodeJS', 'Next.js', 'Nest.js', 'Prisma', 'React'],
    ),
    new ProgrammingLanguageSkill(
        'Bash | zsh',
        'M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z',
        95,
        SkillType.ProgrammingLanguage,
        SkillDirection.UNCHANGED,
    ),
    new ProgrammingLanguageSkill(
        'SQL',
        'M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879s.69 2.783 1.193 4.152c.503 1.37 1.054 2.6 1.915 3.436.43.419 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.566.451.228.125.45.21.68.266.413.103 1.12.241 1.948.1.282-.047.579-.139.875-.27.011.33.024.653.037.98.041 1.036.067 1.993.378 2.832.05.137.187.843.727 1.466.54.624 1.598 1.013 2.803.755.85-.182 1.931-.51 2.649-1.532.71-1.01 1.03-2.459 1.093-4.809.016-.127.035-.235.055-.336l.169.015h.02c.907.041 1.891-.088 2.713-.47.728-.337 1.279-.678 1.68-1.283.1-.15.21-.331.24-.643s-.149-.8-.446-1.025c-.595-.452-.969-.28-1.37-.197a6.27 6.27 0 0 1-1.202.146c1.156-1.947 1.985-4.015 2.458-5.845.28-1.08.437-2.076.45-2.947.013-.871-.058-1.642-.58-2.309C21.36.6 19.067.024 17.293.004c-.055-.001-.11-.002-.165-.001zm-.047.64c1.678-.016 3.822.455 5.361 2.422.346.442.449 1.088.437 1.884-.013.795-.16 1.747-.429 2.79-.522 2.02-1.508 4.375-2.897 6.488a.756.756 0 0 0 .158.086c.29.12.951.223 2.27-.048.332-.07.575-.117.827.075a.52.52 0 0 1 .183.425.704.704 0 0 1-.13.336c-.255.383-.758.746-1.403 1.045-.571.266-1.39.405-2.116.413-.364.004-.7-.024-.985-.113l-.018-.007c-.11 1.06-.363 3.153-.528 4.108-.132.77-.363 1.382-.804 1.84-.44.458-1.063.734-1.901.914-1.038.223-1.795-.017-2.283-.428-.487-.41-.71-.954-.844-1.287-.092-.23-.14-.528-.186-.926-.046-.398-.08-.885-.103-1.434a51.426 51.426 0 0 1-.03-2.523 3.061 3.061 0 0 1-1.552.76c-.689.117-1.304.002-1.671-.09a2.276 2.276 0 0 1-.52-.201c-.17-.091-.332-.194-.44-.397a.56.56 0 0 1-.057-.381.61.61 0 0 1 .218-.331c.198-.161.46-.251.855-.333.719-.148.97-.249 1.123-.37.13-.104.277-.314.537-.622a1.16 1.16 0 0 1-.003-.041 2.96 2.96 0 0 1-1.33-.358c-.15.158-.916.968-1.85 2.092-.393.47-.827.74-1.285.759-.458.02-.872-.211-1.224-.552-.703-.683-1.264-1.858-1.753-3.186-.488-1.328-.885-2.807-1.167-4.067-.283-1.26-.45-2.276-.474-2.766-.105-2.082.382-3.485 1.217-4.37.836-.885 1.982-1.22 3.099-1.284 2.005-.115 3.909.584 4.294.734.742-.504 1.698-.818 2.892-.798a7.39 7.39 0 0 1 1.681.218l.02-.009a6.854 6.854 0 0 1 .739-.214A9.626 9.626 0 0 1 17.08.642zm.152.67h-.146a8.74 8.74 0 0 0-1.704.192c1.246.552 2.187 1.402 2.85 2.25a8.44 8.44 0 0 1 1.132 1.92c.11.264.184.487.226.66.021.087.035.16.04.236.002.038.004.077-.012.144 0 .003-.005.01-.006.013.03.876-.187 1.47-.213 2.306-.02.606.135 1.318.173 2.095.036.73-.052 1.532-.526 2.319.04.048.076.096.114.144 1.254-1.975 2.158-4.16 2.64-6.023.258-1.003.395-1.912.407-2.632.01-.72-.124-1.242-.295-1.46-1.342-1.716-3.158-2.153-4.68-2.165zm-4.79.256c-1.182.003-2.03.36-2.673.895-.663.553-1.108 1.31-1.4 2.085-.347.92-.466 1.81-.513 2.414l.013-.008c.357-.2.826-.4 1.328-.516.502-.115 1.043-.151 1.533.039s.895.637 1.042 1.315c.704 3.257-.219 4.468-.559 5.382a9.61 9.61 0 0 0-.331 1.013c.043-.01.086-.022.129-.026.24-.02.428.06.54.108.342.142.577.44.704.78.033.089.057.185.071.284a.336.336 0 0 1 .02.127 55.14 55.14 0 0 0 .013 3.738c.023.538.057 1.012.1 1.386.043.373.104.657.143.753.128.32.315.739.653 1.024.338.284.823.474 1.709.284.768-.165 1.242-.394 1.559-.723.316-.329.505-.787.626-1.488.181-1.05.545-4.095.589-4.668-.02-.432.044-.764.182-1.017.142-.26.362-.419.552-.505.095-.043.184-.072.257-.093a5.956 5.956 0 0 0-.243-.325 4.456 4.456 0 0 1-.666-1.099 8.296 8.296 0 0 0-.257-.483c-.133-.24-.301-.54-.477-.877-.352-.675-.735-1.493-.934-2.29-.198-.796-.227-1.62.281-2.201.45-.516 1.24-.73 2.426-.61-.035-.105-.056-.192-.115-.332a7.817 7.817 0 0 0-1.041-1.764c-1.005-1.285-2.632-2.559-5.146-2.6h-.115zm-6.642.052c-.127 0-.254.004-.38.011-1.01.058-1.965.351-2.648 1.075-.684.724-1.134 1.911-1.036 3.876.019.372.181 1.414.459 2.652.277 1.238.67 2.695 1.142 3.982.473 1.287 1.046 2.407 1.59 2.937.274.265.512.372.728.363.217-.01.478-.135.797-.518a43.244 43.244 0 0 1 1.81-2.048 3.497 3.497 0 0 1-1.167-3.15c.103-.739.117-1.43.105-1.976-.012-.532-.05-.886-.05-1.107a.336.336 0 0 1 0-.019v-.005l-.001-.006v-.001a9.893 9.893 0 0 1 .592-3.376c.28-.744.697-1.5 1.322-2.112-.614-.202-1.704-.51-2.884-.568a7.603 7.603 0 0 0-.38-.01zM18.199 6.9c-.679.009-1.06.184-1.26.413-.283.325-.31.895-.134 1.597.175.703.537 1.489.877 2.142.17.327.335.621.468.86.134.24.232.41.292.555.055.134.116.252.178.362.263-.555.31-1.1.283-1.668-.035-.703-.198-1.422-.174-2.15.027-.851.195-1.405.21-2.063a5.793 5.793 0 0 0-.74-.048zm-8.234.115a2.82 2.82 0 0 0-.616.074 4.665 4.665 0 0 0-1.153.449 2.417 2.417 0 0 0-.349.228l-.022.02c.006.146.035.5.047 1.021.012.57-.002 1.297-.112 2.084-.239 1.71 1.002 3.126 2.46 3.128.085-.351.225-.707.365-1.082.406-1.094 1.205-1.892.532-5.006-.11-.51-.328-.716-.628-.832a1.474 1.474 0 0 0-.524-.084zm7.917.204h.05c.066.002.127.009.18.022.054.012.1.03.138.055a.164.164 0 0 1 .075.11l-.001.008h.001-.001a.24.24 0 0 1-.035.135.668.668 0 0 1-.11.15.677.677 0 0 1-.386.212.59.59 0 0 1-.41-.103.608.608 0 0 1-.13-.118.26.26 0 0 1-.063-.127.17.17 0 0 1 .042-.128.384.384 0 0 1 .117-.09c.096-.054.226-.094.373-.116.055-.008.109-.012.16-.013zm-7.82.168c.053 0 .109.005.166.013.153.021.289.062.393.122a.446.446 0 0 1 .133.106.223.223 0 0 1 .054.17.302.302 0 0 1-.075.154.649.649 0 0 1-.143.13.64.64 0 0 1-.448.113.728.728 0 0 1-.42-.228.71.71 0 0 1-.118-.164.28.28 0 0 1-.041-.177c.015-.108.104-.164.191-.195a.866.866 0 0 1 .307-.04zm9.06 7.343l-.003.001c-.147.053-.268.075-.37.12a.452.452 0 0 0-.239.214c-.063.115-.117.319-.101.666a.51.51 0 0 0 .148.07c.171.052.458.086.778.081.638-.007 1.423-.156 1.84-.35a3.95 3.95 0 0 0 .943-.615h-.001c-1.393.288-2.18.211-2.663.012a1.315 1.315 0 0 1-.332-.2zm-8.031.094h-.021c-.053.005-.13.023-.279.188-.348.39-.47.635-.757.864-.287.228-.66.35-1.405.503-.236.048-.371.101-.461.144.029.024.026.03.07.053.109.06.249.113.362.142.32.08.846.173 1.395.08.549-.094 1.12-.357 1.607-1.04.084-.118.093-.292.024-.479-.07-.187-.223-.348-.331-.393a.653.653 0 0 0-.204-.06z',
        93,
        SkillType.ProgrammingLanguage,
        SkillDirection.UP,
    ),
    new ProgrammingLanguageSkill(
        'Ruby',
        'M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089v.026-.029.003zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z',
        80,
        SkillType.ProgrammingLanguage,
        SkillDirection.DOWN,
        [
            new Certificate(
                'Percival, Hossain (The Complete Ruby on Rails Developer Course)',
                'https://www.udemy.com/certificate/UC-f3a735d4-388f-4558-b6dd-19fb6925c834/',
                new Date('2020-05-08'),
            ),
        ],
        ['Ruby On Rails'],
    ),
    new ProgrammingLanguageSkill(
        'C#',
        'M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38v1.181a4.5 4.5 0 00-2.25-.566 3.439 3.439 0 00-2.625 1.087 4.099 4.099 0 00-1.012 2.906 3.9 3.9 0 00.945 2.754 3.217 3.217 0 002.482 1.023 4.657 4.657 0 002.464-.634l-.004 1.08a5.543 5.543 0 01-2.625.555 4.211 4.211 0 01-3.228-1.297 4.793 4.793 0 01-1.212-3.409 5.021 5.021 0 011.365-3.663 4.631 4.631 0 013.473-1.392 5.55 5.55 0 01.12-.004 5.55 5.55 0 01.122 0zm5.863.155h.836l-.555 2.652h1.661l.567-2.652h.81l-.555 2.652 1.732-.004-.15.697H17.91l-.412 1.98h1.852l-.176.698h-1.816l-.58 2.625h-.83l.567-2.625h-1.65l-.555 2.625h-.81l.555-2.625h-1.74l.131-.698h1.748l.401-1.976h-1.826l.138-.697h1.826zm.142 3.345L15 12.6h1.673l.423-1.98z',
        75,
        SkillType.ProgrammingLanguage,
        SkillDirection.DOWN,
    ),
    new ProgrammingLanguageSkill(
        'C',
        'M17.023 9.216s-.386-3.293-3.955-3.385c-3.57-.091-5.402 2.47-5.402 6.13 0 3.66 2.026 6.588 5.498 6.588 3.473 0 3.86-3.66 3.86-3.66l6.656.366s.391 3.306-2.394 5.828C18.5 23.605 15.082 24.017 12.694 24c-2.388-.018-5.698.034-8.9-2.969C.595 18.03.05 15.113.05 12.248c0-2.866.607-6.661 4.414-9.54C7.05.754 9.673.033 12.296.033 23.246.032 23.98 9.28 23.98 9.28z',
        70,
        SkillType.ProgrammingLanguage,
        SkillDirection.UNCHANGED,
    ),
    new ProgrammingLanguageSkill(
        'Visual Basic',
        'M3.1672 7.5655v8.749H4.19v-6.325a8.979 8.979 0 0 0-.0488-1.1998h.0384a2.9082 2.9082 0 0 0 .2784.5473l4.4973 6.9774h1.2569V7.5655H9.1904v6.1526a9.2574 9.2574 0 0 0 .0619 1.286h-.0234c-.0544-.1056-.173-.3002-.3553-.585L4.4964 7.5656zm9.315 0v8.749h4.65l.0048-.9599h-3.6087v-3.0331h3.1579V11.4h-3.1579V8.4916h3.3884v-.926zm5.4374 0v.926h2.5149v7.823h1.0216v-7.823H24v-.926zM.6534 15.067a.643.643 0 0 0-.4565.2062A.6719.6719 0 0 0 0 15.753a.6623.6623 0 0 0 .1968.4799.6479.6479 0 0 0 .4799.2015.6623.6623 0 0 0 .4799-.2015.6575.6575 0 0 0 .2015-.48.667.667 0 0 0-.2015-.4798.6575.6575 0 0 0-.4799-.2062.643.643 0 0 0-.0234 0z',
        20,
        SkillType.ProgrammingLanguage,
        SkillDirection.DOWN,
    ),
    new ProgrammingLanguageSkill(
        'Batch & Powershell',
        'M23.181 3.077c.568 0 .923.463.792 1.035l-3.659 15.981c-.13.572-.697 1.035-1.265 1.035H.819c-.568 0-.923-.463-.792-1.035L3.686 4.112c.13-.572.697-1.035 1.265-1.035h18.23zm-8.375 9.345c.251-.394.227-.905-.09-1.243L9.122 5.228c-.38-.405-1.037-.407-1.466-.004-.429.403-.468 1.057-.088 1.461l4.662 4.96v.11l-7.42 5.373c-.45.327-.533.977-.187 1.453.346.476.991.597 1.44.27l8.229-5.909c.28-.197.438-.366.514-.52zm-2.796 4.399a.928.928 0 0 0-.934.923c0 .51.418.923.934.923h4.433a.928.928 0 0 0 .934-.923.928.928 0 0 0-.934-.923H12.01z',
        40,
        SkillType.ProgrammingLanguage,
        SkillDirection.DOWN,
    ),
    new ProgrammingLanguageSkill(
        'Swift',
        'M21.984 16.348c.056-.112.056-.224.112-.336 1.346-5.272-1.851-11.44-7.347-14.693 2.412 3.253 3.365 7.122 2.524 10.599-.056.28-.168.617-.28.897a5.173 5.173 0 0 1-.45-.28S11.104 9.17 5.273 3.282c-.169-.168 3.14 4.71 6.841 8.58-1.738-1.01-6.673-4.542-9.758-7.403.337.617.842 1.234 1.346 1.851 2.58 3.309 5.945 7.346 9.983 10.43-2.86 1.74-6.842 1.851-10.88 0-1.01-.448-1.85-1.009-2.804-1.682 1.682 2.636 4.318 5.048 7.459 6.337 3.757 1.627 7.57 1.515 10.318 0h.057c.112-.056.224-.112.336-.224 1.346-.673 3.982-1.402 5.44 1.402.392.785 1.121-2.86-1.626-6.225z',
        60,
        SkillType.ProgrammingLanguage,
        SkillDirection.UP,
    ),
    new ProgrammingLanguageSkill(
        'Python',
        'M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z',
        43,
        SkillType.ProgrammingLanguage,
        SkillDirection.DOWN,
    ),
    new ProgrammingLanguageSkill(
        'PHP',
        'M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z',
        25,
        SkillType.ProgrammingLanguage,
        SkillDirection.DOWN,
    ),
    new ProgrammingLanguageSkill(
        'Haskell',
        'M.006 20.47L5.649 12 .006 3.531h4.235l5.674 8.47-5.674 8.468zm5.643 0L11.29 12 5.65 3.531h4.266l11.253 16.938h-4.224l-3.535-5.34-3.495 5.34zM19.3 15.525l-1.877-2.827h6.571v2.826zm-2.826-4.235l-1.877-2.827h9.387v2.827z',
        30,
        SkillType.ProgrammingLanguage,
        SkillDirection.UNCHANGED,
    ),
    new ProgrammingLanguageSkill(
        'Dart',
        'M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z',
        10,
        SkillType.ProgrammingLanguage,
        SkillDirection.UNCHANGED,
    ),
    new ProgrammingLanguageSkill(
        'C++',
        'M22.393 6c-.167-.29-.398-.543-.652-.69L12.925.22c-.508-.293-1.339-.293-1.847 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.689l8.816 5.091c.508.293 1.339.293 1.847 0l8.816-5.091c.254-.146.485-.399.652-.689s.271-.616.271-.91V6.91c.002-.294-.102-.62-.269-.91zM12 19.109c-3.92 0-7.109-3.189-7.109-7.109S8.08 4.891 12 4.891a7.133 7.133 0 0 1 6.156 3.552l-3.076 1.781A3.567 3.567 0 0 0 12 8.445c-1.96 0-3.554 1.595-3.554 3.555S10.04 15.555 12 15.555a3.57 3.57 0 0 0 3.08-1.778l3.077 1.78A7.135 7.135 0 0 1 12 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.789v-.79h.789v-.79h.79v.79h.79v.79z',
        5,
        SkillType.ProgrammingLanguage,
        SkillDirection.UNCHANGED,
    ),
    new ProgrammingLanguageSkill(
        'Go',
        'M1.811 10.715c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07l-4.23-.011zM.047 11.79c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07l-5.527.012zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082l-2.547-.012zM15.004 10.505c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.771.105-.129.198-.269.315-.433H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 0 1 .292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 0 1-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.021 1.098-.199 2.15-.07 3.096.572.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.199 M18.872 16.967c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 0 1-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.951 1.192-.21 2.314-.094 3.33.596.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.059-.63.07-.934.106zm2.78-4.721c-.011-.152-.011-.269-.034-.386-.21-1.157-1.274-1.811-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.209.643.28 1.285.245 1.905-.07.923-.48 1.425-1.227 1.484-2.232z',
        25,
        SkillType.ProgrammingLanguage,
        SkillDirection.UP,
    ),
    new ProgrammingLanguageSkill(
        'Matlab',
        'M4.323 16.248C3.13 15.354 1.64 14.31 0 13.118l5.814-2.236 2.385 1.789c-1.789 2.087-2.981 2.832-3.876 3.578zm15.95-6.26c-.447-1.193-.745-2.385-1.193-3.578-.447-1.342-.894-2.534-1.64-3.578-.298-.447-.894-1.491-1.64-1.491-.149 0-.298.149-.447.149-.447.149-1.043 1.043-1.193 1.64-.447.745-1.342 1.938-1.938 2.683-.149.298-.447.596-.596.745-.447.298-.894.745-1.491 1.043-.149 0-.298.149-.447.149-.447 0-.745.298-1.043.447-.447.447-.894 1.043-1.342 1.491 0 .149-.149.298-.298.447l2.236 1.64c1.64-1.938 3.578-3.876 4.919-7.602 0 0-.447 4.025-4.025 8.348-2.236 2.534-4.025 3.876-4.323 4.174 0 0 .596-.149 1.193.149 1.193.447 1.789 2.087 2.236 3.279.298.894.745 1.64 1.043 2.534 1.193-.298 1.938-.745 2.683-1.491s1.491-1.64 2.236-2.385c1.342-1.64 2.981-3.727 5.068-2.683.298.149.745.447.894.596.447.298.745.596 1.193 1.043.745.596 1.043 1.043 1.64 1.342-1.491-2.981-2.534-5.963-3.727-9.093z',
        3,
        SkillType.ProgrammingLanguage,
        SkillDirection.DOWN,
    ),
    new ProgrammingLanguageSkill(
        'R',
        'M12 18.82c-6.627 0-12-3.598-12-8.037s5.373-8.037 12-8.037 12 3.599 12 8.037-5.373 8.037-12 8.037zm1.837-12.932c-5.038 0-9.121 2.46-9.121 5.495s4.083 5.494 9.12 5.494 8.756-1.682 8.756-5.494-3.718-5.495-8.755-5.495zM18.275 15.194a9.038 9.038 0 0 1 1.149.433 2.221 2.221 0 0 1 .582.416 1.573 1.573 0 0 1 .266.383l2.863 4.826-4.627.002-2.163-4.063a5.229 5.229 0 0 0-.716-.982.753.753 0 0 0-.549-.25h-1.099v5.292l-4.093.001V7.737h8.221s3.744.067 3.744 3.63a3.822 3.822 0 0 1-3.578 3.827zm-1.78-4.526l-2.479-.001v2.298h2.479a1.134 1.134 0 0 0 1.148-1.17 1.07 1.07 0 0 0-1.148-1.127z',
        10,
        SkillType.ProgrammingLanguage,
        SkillDirection.DOWN,
    ),
    // Human languages
    new GenericSkill(
        'German',
        'M5.44995 2.6C5.44995 2.27 5.71995 2 6.04995 2C6.37995 2 6.64995 2.27 6.64995 2.6V3.55005H20.05C20.38 3.55005 20.65 3.82005 20.65 4.15005V13.15C20.65 13.48 20.38 13.75 20.05 13.75H6.64995V20.8H8.14985C8.47985 20.8 8.74985 21.07 8.74985 21.4C8.74985 21.73 8.47985 22 8.14985 22H3.94985C3.61985 22 3.34985 21.73 3.34985 21.4C3.34985 21.07 3.61985 20.8 3.94985 20.8H5.44995V13.15V4.15005V2.6ZM6.64995 12.55H19.45V4.75005H6.64995V12.55Z',
        100,
        SkillType.HumanLanguage,
        SkillDirection.UNCHANGED,
    ),
    new GenericSkill(
        'English',
        'M5.44995 2.6C5.44995 2.27 5.71995 2 6.04995 2C6.37995 2 6.64995 2.27 6.64995 2.6V3.55005H20.05C20.38 3.55005 20.65 3.82005 20.65 4.15005V13.15C20.65 13.48 20.38 13.75 20.05 13.75H6.64995V20.8H8.14985C8.47985 20.8 8.74985 21.07 8.74985 21.4C8.74985 21.73 8.47985 22 8.14985 22H3.94985C3.61985 22 3.34985 21.73 3.34985 21.4C3.34985 21.07 3.61985 20.8 3.94985 20.8H5.44995V13.15V4.15005V2.6ZM6.64995 12.55H19.45V4.75005H6.64995V12.55Z',
        60,
        SkillType.HumanLanguage,
        SkillDirection.UP,
    ),

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

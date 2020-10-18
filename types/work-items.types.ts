import { DurationItem } from '../helper/date-calculator';
import { Skill } from './skill-items.types';

class Company {
    name: string;
    url: string;
}

export class WorkModel {
    position: string;
    company: Company;
    responsibilities?: string[] = [];
    technologies?: Skill[] = [];
    duration: DurationItem;
    image: string;
    shortSummary: string;
    summary: string;
    place: string;
}

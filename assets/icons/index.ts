import { SVGProps } from 'react';
import ArrowDown from './arrow-down.svg';
import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';
import ArrowUp from './arrow-up.svg';
import BadgeCheck from './badge-check.svg';
import Books from './books.svg';
import Brain from './brain.svg';
import Briefcase from './briefcase.svg';
import Calendar from './calendar.svg';
import Camera from './camera.svg';
import Diploma from './diploma.svg';
import Envelope from './envelope.svg';
import ExternalLink from './external-link.svg';
import Github from './github.svg';
import GraduationCap from './graduation-cap.svg';
import Hobby from './hobby.svg';
import Language from './language.svg';
import LaptopCode from './laptop-code.svg';
import LightOff from './light-off.svg';
import LightOn from './light-on.svg';
import LinkedIn from './linkedin.svg';
import Microchip from './microchip.svg';
import University from './university.svg';
import Xing from './xing.svg';

export interface SVGRProps {
    title?: string;
    titleId?: string;
}

export type SVG = (props: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element;

export const ExternalLinkIcon: SVG = ExternalLink;
export const BrainIcon: SVG = Brain;
export const CalendarIcon: SVG = Calendar;
export const UniversityIcon: SVG = University;
export const BooksIcon: SVG = Books;
export const ArrowDownIcon: SVG = ArrowDown;
export const ArrowLeftIcon: SVG = ArrowLeft;
export const ArrowRightIcon: SVG = ArrowRight;
export const ArrowUpIcon: SVG = ArrowUp;
export const BadgeCheckIcon: SVG = BadgeCheck;
export const BriefcaseIcon: SVG = Briefcase;
export const HobbyIcon: SVG = Hobby;
export const MicrochipIcon: SVG = Microchip;
export const GraduationCapIcon: SVG = GraduationCap;
export const CameraIcon: SVG = Camera;
export const GithubIcon: SVG = Github;
export const XingIcon: SVG = Xing;
export const LinkedInIcon: SVG = LinkedIn;
export const LightOffIcon: SVG = LightOff;
export const LightOnIcon: SVG = LightOn;
export const EnvelopeIcon: SVG = Envelope;
export const LanguageIcon: SVG = Language;
export const LaptopCodeIcon: SVG = LaptopCode;
export const DiplomaIcon: SVG = Diploma;

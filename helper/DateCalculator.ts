import { TFunction } from 'next-i18next';

export class DurationItem {
    start: Date;
    end?: Date;
}

const ONE_DAY = 24 * 60 * 60 * 1000;
export const calculateDaysBetween = (start: number, end: number): number => {
    return Math.round(Math.abs(end - start) / ONE_DAY);
};

export const calcDurationBetween = (duration: DurationItem, t: TFunction): string => {
    const dur = (duration.end?.getTime() ?? new Date().getTime()) - duration.start?.getTime();

    if (dur < 1000) {
        const number = Math.round(dur);
        return `${number} ${t('duration.ms' + (number !== 1 ? 's' : ''))}`;
    } else if (dur < 60000) {
        const number = Math.round(dur / 1000);
        return `${number} ${t('duration.s' + (number !== 1 ? 's' : ''))}`;
    } else if (dur < 3600000) {
        const number = Math.round(dur / 60000);
        return `${number} ${t('duration.min' + (number !== 1 ? 's' : ''))}`;
    } else if (dur < 86400000) {
        const number = Math.round(dur / 3600000);
        return `${number} ${t('duration.h' + (number !== 1 ? 's' : ''))}`;
    } else if (dur < 604800000) {
        const number = Math.round(dur / 86400000);
        return `${number} ${t('duration.day' + (number !== 1 ? 's' : ''))}`;
    } else if (dur < 31536000000) {
        const number = Math.round(dur / 604800000);
        return `${number} ${t('duration.week' + (number !== 1 ? 's' : ''))}`;
    } else {
        const number = Math.round(dur / 31536000000);
        return `${number} ${t('duration.year' + (number !== 1 ? 's' : ''))}`;
    }
};

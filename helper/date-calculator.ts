export class DurationItem {
    start: Date;
    end?: Date;
}

export const fixDurationItem = (item: DurationItem): void => {
    if (typeof item.start === 'string') {
        item.start = new Date(item.start);
    }
    if (typeof item.end === 'string') {
        item.end = new Date(item.end);
    }
};

const ONE_DAY = 24 * 60 * 60 * 1000;
export const calculateDaysBetween = (start: number, end: number): number => {
    return Math.round(Math.abs(end - start) / ONE_DAY);
};

export const calcDurationBetween = (duration: DurationItem): string => {
    const dur = (duration?.end?.getTime() ?? new Date().getTime()) - duration?.start?.getTime();

    if (Math.abs(dur) < 1000) {
        const number = Math.floor(dur);
        return `${number} millisecond${number !== 1 ? 's' : ''}`;
    } else if (Math.abs(dur) < 60000) {
        const number = Math.floor(dur / 1000);
        return `${number} second${number !== 1 ? 's' : ''}`;
    } else if (Math.abs(dur) < 3600000) {
        const number = Math.floor(dur / 60000);
        return `${number} minute${number !== 1 ? 's' : ''}`;
    } else if (Math.abs(dur) < 86400000) {
        const number = Math.floor(dur / 3600000);
        return `${number} hour${number !== 1 ? 's' : ''}`;
    } else if (Math.abs(dur) < 604800000) {
        const number = Math.floor(dur / 86400000);
        return `${number} day${number !== 1 ? 's' : ''}`;
    } else if (Math.abs(dur) < 31536000000) {
        const number = Math.floor(dur / 604800000);
        return `${number} week${number !== 1 ? 's' : ''}`;
    } else {
        const number = Math.floor(dur / 31536000000);
        return `${number} year${number !== 1 ? 's' : ''}`;
    }
};

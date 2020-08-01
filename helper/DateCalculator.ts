import {DurationItem} from "../lib/work-items.list";

const ONE_DAY = 24 * 60 * 60 * 1000;
export const calculateDaysBetween = (start, end) => {
    return Math.round(Math.abs(end - start) / ONE_DAY)
}

export const calcDurationBetween = (duration: DurationItem) => {
    const dur = ((duration.end?.getTime() ?? new Date().getTime()) - duration.start?.getTime())

    if (dur < 1000)
        return Math.round(dur) + "ms"
    else if (dur < 60000)
        return Math.round(dur / 1000) + "s"
    else if (dur < 3600000)
        return Math.round(dur / 60000) + " min"
    else if (dur < 86400000)
        return Math.round(dur / 3600000) + "h"
    else if (dur < 604800000)
        return Math.round(dur / 86400000) + " days"
    else if (dur < 31536000000)
        return Math.round(dur / 604800000) + " weeks"
    else return Math.round(dur / 31536000000) + " years"
}

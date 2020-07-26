const ONE_DAY = 24 * 60 * 60 * 1000;
export const calculateDaysBetween = (start, end) => {
    return Math.round(Math.abs(end - start) / ONE_DAY)
}

import { WorkModel } from '../types/work-items.types';

export const calculateLastWork = (workList: WorkModel[]) => {
    return workList.length === 0
        ? new WorkModel()
        : workList.reduce((a, b) => {
              return a.duration.start > b.duration.start ? a : b;
          });
};

export const remapWorkDurationToDate = (workList: WorkModel[]) => {
    workList.forEach((work) => {
        if (typeof work.duration.start === 'string') work.duration.start = new Date(work.duration.start);
        if (typeof work.duration.end === 'string') work.duration.end = new Date(work.duration.end);
    });
};

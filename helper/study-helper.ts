import { WorkModel } from '../types/work-items.types';
import { StudyModel } from '../data/study-items.list';

export const remapStudyDurationToDate = (studyList: StudyModel[]) => {
    studyList.forEach((study) => {
        if (typeof study.duration.start === 'string') study.duration.start = new Date(study.duration.start);
        if (typeof study.duration.end === 'string') study.duration.end = new Date(study.duration.end);
    });
};

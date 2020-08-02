export class DurationItem {
    start: Date;
    end?: Date;
}

export class WorkModel {
    position: string;
    company: string;
    responsibilities: string[] = [];
    technologies: string[] = [];
    duration: DurationItem;
    image: string;
    summary: string;
}


export const workList: (t: any) => (WorkModel)[] = (t) => [
    {
        position: 'Associate Consultant',
        company: 'fme AG',
        responsibilities: [
            "Application Development", "Consulting", "DevOP", "Continuous Integration & Delivery", "Kubernetes Cluster", "Internal Projects"
        ],
        technologies: [
            "Java & Kotlin", "JavaScript & Typescript", "Postgres & Oracle DB", "Docker & Kubernetes"
        ],
        duration: {
            start: new Date(2019, 9, 5)
        },
        image: '/assets/images/work/fme-02.jpg',
        summary: 'I did this and this'
    },
    {
        position: 'Junior Software Developer',
        company: 'dotSource GmbH',
        responsibilities: [
            "this", "and this", "this and...", "this!"
        ],
        technologies: [
            "Java", "C#", "Haskell"
        ],
        duration: {
            start: new Date(2019, 8, 1),
            end: new Date(2019, 9, 15)
        },
        image: '/assets/images/work/dotsource.jpg',
        summary: 'This is my description. It is a little bit longer and I want to tell a story, but I dont know which story it should be...'
    },
    {
        position: 'Student',
        company: 'fme AG',
        responsibilities: [
            "this", "and this", "this and...", "this!"
        ],
        technologies: [
            "Java", "C#", "Haskell"
        ],
        duration: {
            start: new Date(2018, 5, 1),
            end: new Date(2019, 7, 31)
        },
        image: '/assets/images/work/fme-01.jpg',
        summary: 'This is my description. It is a little bit longer and I want to tell a story, but I dont know which story it should be...'
    },
    {
        position: 'Student Worker',
        company: 'Elektrobit',
        responsibilities: [
            "this", "and this", "this and...", "this!"
        ],
        technologies: [
            "Java", "C#", "Haskell"
        ],
        duration: {
            start: new Date(2017, 1, 15),
            end: new Date(2018, 4, 30)
        },
        image: '/assets/images/work/elektrobit.jpg',
        summary: 'This is my description. It is a little bit longer and I want to tell a story, but I dont know which story it should be...'
    },
    {
        position: 'Student Assistant',
        company: 'Ostfalia',
        responsibilities: [
            "this", "and this", "this and...", "this!"
        ],
        technologies: [
            "Java", "C#", "Haskell"
        ],
        duration: {
            start: new Date(2015, 11, 1),
            end: new Date(2016, 7, 31)
        },
        image: '/assets/images/work/ostfalia.jpg',
        summary: 'This is my description. It is a little bit longer and I want to tell a story, but I dont know which story it should be...'
    },
    {
        position: 'Disk Jockey',
        company: 'Self Employed | Rubeen',
        responsibilities: [
            "this", "and this", "this and...", "this!"
        ],
        technologies: [
            "Java", "C#", "Haskell"
        ],
        duration: {
            start: new Date(2015, 1, 1),
            end: new Date(2016, 1, 31)
        },
        image: '/assets/images/work/dj.jpg',
        summary: 'This is my description. It is a little bit longer and I want to tell a story, but I dont know which story it should be...'
    },
]

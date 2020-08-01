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
        image: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        summary: 'I did this and this'
    },
    {
        position: 'JobTitle',
        company: 'Company',
        responsibilities: [
            "this", "and this", "this and...", "this!"
        ],
        technologies: [
            "Java", "C#", "Haskell"
        ],
        duration: {
            start: new Date(2011, 7, 1),
            end: new Date(2014, 5, 31)
        },
        image: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        summary: 'This is my description. It is a little bit longer and I want to tell a story, but I dont know which story it should be...'
    },
    {
        position: 'JobTitle',
        company: 'Company',
        responsibilities: [
            "this", "and this", "this and...", "this!"
        ],
        technologies: [
            "Java", "C#", "Haskell"
        ],
        duration: {
            start: new Date(2011, 7, 1),
            end: new Date(2014, 5, 31)
        },
        image: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        summary: 'This is my description. It is a little bit longer and I want to tell a story, but I dont know which story it should be...'
    },
    {
        position: 'JobTitle',
        company: 'Company',
        responsibilities: [
            "this", "and this", "this and...", "this!"
        ],
        technologies: [
            "Java", "C#", "Haskell"
        ],
        duration: {
            start: new Date(2011, 7, 1),
            end: new Date(2014, 5, 31)
        },
        image: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        summary: 'This is my description. It is a little bit longer and I want to tell a story, but I dont know which story it should be...'
    },
    {
        position: 'JobTitle',
        company: 'Company',
        responsibilities: [
            "this", "and this", "this and...", "this!"
        ],
        technologies: [
            "Java", "C#", "Haskell"
        ],
        duration: {
            start: new Date(2011, 7, 1),
            end: new Date(2014, 5, 31)
        },
        image: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        summary: 'This is my description. It is a little bit longer and I want to tell a story, but I dont know which story it should be...'
    },
    {
        position: 'JobTitle',
        company: 'Company',
        responsibilities: [
            "this", "and this", "this and...", "this!"
        ],
        technologies: [
            "Java", "C#", "Haskell"
        ],
        duration: {
            start: new Date(2011, 7, 1),
            end: new Date(2014, 5, 31)
        },
        image: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        summary: 'This is my description. It is a little bit longer and I want to tell a story, but I dont know which story it should be...'
    },
]

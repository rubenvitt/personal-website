import {workList} from "./work-items.list";

export const CvWork = () => {

    const works = workList(null)

    return <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
            <h2 className="text-xl leading-6 font-medium text-gray-900">
                Work experience
            </h2>
            <div className="mt-12 grid gap-5 max-w-lg mx-auto md:grid-cols-2 md:max-w-none lg:grid-cols-3">
                {works.map((work, i) => {
                    return <button key={i}
                                   className="flex flex-col rounded-lg shadow-lg overflow-hidden text-left bg-white hover:bg-gray-50">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover"
                                 src={work.image}
                                 alt={work.company}/>
                        </div>
                        <div
                            className="block flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-indigo-600">
                                <span
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800 mr-2">
                                    {work.duration}
                                </span>
                                    <span
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                                    {work.position}
                                </span>
                                </p>
                                <div className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        {work.company}
                                    </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        {work.summary}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="#">
                                        <img className="h-10 w-10 rounded-full"
                                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             alt=""></img>
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm leading-5 font-medium text-gray-900">
                                        <a href="#" className="hover:underline">
                                            Roel Aufderhar
                                        </a>
                                    </p>
                                    <div className="flex text-sm leading-5 text-gray-500">
                                        <time dateTime="2020-03-16">
                                            Mar 16, 2020
                                        </time>
                                        <span className="mx-1">
                  &middot;
                </span>
                                        <span>
                  6 min read
                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                })}
            </div>
        </div>
    </div>
}

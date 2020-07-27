import {Direction, skillList} from "./skill-items.list";

export const CvSkills = () => {
    const skills = skillList(null);
    return <div className="px-2 py-2">
        <h2 className="text-xl leading-6 font-medium text-gray-900">
            My technologies
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.slice(0, 5).map((skill, i) => {
                return <div key={i} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                                <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24"
                                     stroke="none">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                          d={skill.svg}/>
                                </svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                        {skill.title}
                                        {
                                            skill.certificates && skill.certificates.length > 0
                                                ? <span
                                                    className="inline-flex items-center ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-yellow-100 text-yellow-800">
                                                    <svg className="-ml-0.5 mr-0.5 h-4 w-4 text-yellow-400"
                                                         fill="currentColor" viewBox="0 -1.5 23 23">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7z" />
                                                    </svg> Certified
                                            </span> : null
                                        }
                                    </dt>
                                    <dd className="flex items-baseline">
                                        <div className="text-2xl leading-8 font-semibold text-gray-900">
                                            {skill.value}
                                        </div>
                                        <div
                                            className={"ml-2 flex items-baseline text-sm leading-5 font-semibold " + calcColor(skill.status)}>
                                            <svg
                                                className={"self-center flex-shrink-0 h-5 w-5 transform " + calcArrowDirection(skill.status)}
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd"
                                                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                            {skill.status.direction}
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    {
                        skill.certificates && skill.certificates.length > 0 ?
                            <div className="align-bottom bg-gray-50 px-4 py-4 sm:px-6">
                                <div
                                    className={"text-sm leading-5 grid grid-cols-" + calcCols(skill.certificates.length) + " gap-5"}>
                                    {skill.certificates.map((cert, i) => {

                                            return <a href={cert.url} key={i}
                                                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                {cert.title}
                                            </a>
                                        }
                                    )}
                                </div>
                            </div> : null
                    }
                </div>
            })}
            {
                skills.length > 11 ? <a href="#"
                                        className="bg-white shadow overflow-hidden sm:rounded-md block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                        <div className="min-w-0 flex-1 flex items-center">
                            <div className="min-w-0 flex-1 px-4 md:grid grid-cols-1 md:gap-4">
                                <div>
                                    <div className="text-sm leading-5 font-medium text-orange-500 truncate">There's
                                        more!
                                    </div>
                                    <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                             fill="currentColor">
                                            <path
                                                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                        </svg>
                                        <span className="">Get to know more of my language skills</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                </a> : null
            }
        </div>
    </div>


}

function calcCols(certs) {
    if (certs < 7)
        return certs
    if (certs % 6 === 0)
        return 6;
    if (certs % 5 === 0)
        return 5;
    if (certs % 4 === 0)
        return 4;
    else
        return 3;
}


const calcColor = ({direction}) => {
    switch (direction) {
        case Direction.UP:
            return 'text-green-500';
        case Direction.DOWN:
            return 'text-red-500';
        case Direction.UNCHANGED:
            return 'text-yellow-300';
    }
}

const calcArrowDirection = ({direction}) => {
    switch (direction) {
        case Direction.UP:
            return 'rotate-180';
        case Direction.DOWN:
            return '';
        case Direction.UNCHANGED:
            return '-rotate-90';
    }
}

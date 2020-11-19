import React from "react";

export const NotFoundComponent = () => {
    return <div className="bg-red-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                <span className="block">You went below</span>
                <span className="block">the end of my website.</span>
            </h2>
            <p
                className={
                    'text-6xl leading-9 font-extrabold text-white pt-10 pb-16 px-4 sm:pt-16 pb-20 sm:px-6 lg:px-8 sm:leading-10'
                }
            >
                404
            </p>
            <p className="mt-4 text-lg leading-6 text-red-200">
                I didn't knew before, this ever could happen and I'm sorry for that.
            </p>
            <p className="mt-4 text-lg leading-6 text-red-200">
                On the other side... 1000 points for you for reaching this! It would be great, if you may tell me
                more, maybe from which dead link you came here.
            </p>
            <a
                href={'https://github.com/rubenvitt/personal-website/issues/new'}
                target={'_blank'}
                rel={'noreferrer'}
                className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-red-600 bg-white hover:text-red-100 hover:bg-red-500 transition duration-150 ease-in-out sm:w-auto"
            >
                Report 🐛 here
            </a>
        </div>
    </div>
}

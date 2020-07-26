import React, {useState} from "react";
import {NavBar} from "../navbar/navbar.component";

export const PageContainer = ({children, title}) => {
    const titleNotAvailable = title === null || title === ''

    return <div>
        <div className="min-h-screen bg-white">
            <NavBar/>
            <div className="py-10">
                {
                    (titleNotAvailable)
                        ? ''
                        : <header>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                                    {title}
                                </h1>
                            </div>
                        </header>
                }

                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className={"px-4 " + titleNotAvailable ? '' : 'pt-8' + " pb-8 sm:px-0"}>
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
}

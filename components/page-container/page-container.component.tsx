import React from 'react';
import { NavBar } from '../navbar/navbar.component';

export class PageContainerProps {
    children: JSX.Element | JSX.Element[] | string;
    title?: string;
}

export const PageContainer = ({ children, title }: PageContainerProps): JSX.Element => {
    const titleNotAvailable = title === null || title === '';

    return (
        <div>
            <div className="min-h-screen bg-white dark:bg-gray-900 dark:bg-gray-900">
                <NavBar />
                <div className="py-10">
                    {titleNotAvailable ? (
                        ''
                    ) : (
                        <header>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h1 className="text-3xl font-bold leading-tight text-gray-900">{title}</h1>
                            </div>
                        </header>
                    )}

                    <main>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className={'px-4 ' + titleNotAvailable ? '' : 'pt-8' + ' pb-8 sm:px-0'}>
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

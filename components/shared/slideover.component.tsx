import React from 'react';
import TransitionComponent from './Transition.component';

class SlideOverProps {
    slideOverState: boolean;
    setSlideOverState: (state: boolean) => void;
    contentFunction: (content: unknown) => JSX.Element;
    content: unknown;
    title: string;
}

export const SlideOver = ({
    slideOverState,
    setSlideOverState,
    contentFunction,
    content,
    title,
}: SlideOverProps): JSX.Element => {
    const toggleSlideOver = () => {
        setSlideOverState(!slideOverState);
    };

    return (
        <TransitionComponent
            show={slideOverState}
            enter="transition duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 overflow-hidden z-30">
                <div className="absolute inset-0 overflow-hidden">
                    <TransitionComponent
                        show={slideOverState}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            onClick={toggleSlideOver}
                            className={'absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity'}
                        />
                    </TransitionComponent>
                    <section className="absolute inset-y-0 right-0 max-w-full flex">
                        <TransitionComponent
                            show={slideOverState}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className={'w-screen max-w-md'}>
                                <TransitionComponent
                                    show={slideOverState}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div
                                        className={
                                            'hidden md:block ease-in-out duration-500 absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4 transition'
                                        }
                                    >
                                        <button
                                            onClick={toggleSlideOver}
                                            aria-label="Close panel"
                                            className="text-gray-300 hover:text-white transition ease-in-out duration-150"
                                        >
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </TransitionComponent>
                                <div className="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll">
                                    <header className="px-4 sm:px-6">
                                        <div className="flex items-start justify-between space-x-3">
                                            <h2 className="text-lg leading-7 font-medium text-gray-900">{title}</h2>
                                            <div className="h-7 flex items-center block md:hidden">
                                                <button
                                                    onClick={toggleSlideOver}
                                                    aria-label="Close panel"
                                                    className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                                                >
                                                    <svg
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="relative flex-1 px-4 sm:px-6">{contentFunction(content)}</div>
                                </div>
                            </div>
                        </TransitionComponent>
                    </section>
                </div>
            </div>
        </TransitionComponent>
    );
};

import React from "react";
import {CSSTransition} from "react-transition-group";
import style from './slideover.component.module.scss'
import test from "../../pages/test";

export const SlideOver = ({slideOverState, setSlideOverState, contentFunction, content, title}) => {
    const toggleSlideOver = () => {
        setSlideOverState(!slideOverState);
    };

    return <CSSTransition
        in={slideOverState}
        timeout={0}
        classNames={{
            enterDone: style.test
        }}
    >
        <div id={'test'} className="fixed inset-0 overflow-hidden z-30 hidden">
            <div className="absolute inset-0 overflow-hidden">
                {/*<!--
              Background overlay, show/hide based on slide-over state.

              Entering: "ease-in-out duration-500"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "ease-in-out duration-500"
                From: "opacity-100"
                To: "opacity-0"
            -->*/}
                <div onClick={toggleSlideOver}
                     className={"absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}/>
                <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
                    {/*<!--
                  Slide-over panel, show/hide based on slide-over state.

                  Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-full"
                    To: "translate-x-0"
                  Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-0"
                    To: "translate-x-full"
                -->*/}
                    <div
                        className={(slideOverState ? 'translate-x-0' : "translate-x-full") + " transform transition ease-in-out duration-500 sm:duration-700 relative w-screen max-w-md"}>
                        {/*<!--
                      Close button, show/hide based on slide-over state.

                      Entering: "ease-in-out duration-500"
                        From: "opacity-0"
                        To: "opacity-100"
                      Leaving: "ease-in-out duration-500"
                        From: "opacity-100"
                        To: "opacity-0"
                    -->*/}
                        <div
                            className={(slideOverState ? 'opacity 0' : "opacity-100") + " ease-in-out duration-500 absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4"}>

                            <button onClick={toggleSlideOver} aria-label="Close panel"
                                    className="text-gray-300 hover:text-white transition ease-in-out duration-150">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll">
                            <header className="px-4 sm:px-6">
                                <h2 className="text-lg leading-7 font-medium text-gray-900">
                                    {title}
                                </h2>
                            </header>
                            <div className="relative flex-1 px-4 sm:px-6">
                                {contentFunction(content)}
                                {/*<!-- Replace with your content -->
                            <div className="absolute inset-0 px-4 sm:px-6">
                                <div className="h-full border-2 border-dashed border-gray-200"/>
                            </div>
                            /*<!-- /End replace -->*/}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </CSSTransition>
}

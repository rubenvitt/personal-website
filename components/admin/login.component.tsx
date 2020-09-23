import React, { useState } from 'react';

interface AdminLoginComponentProps {
    lastResult: boolean;
    onSubmit: (string) => void;
}

export const AdminLoginComponent = ({ lastResult, onSubmit }: AdminLoginComponentProps): JSX.Element => {
    const [inputText, setInputText] = useState('');
    const [submittedToken, setSubmittedToken] = useState('');
    const submitMethod = (event) => {
        onSubmit(inputText);
        event.preventDefault();
        setSubmittedToken(inputText);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                <div>
                    <img className="mx-auto h-12 w-auto" src="/assets/images/r.png" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Admin Login</h2>
                    <p className="mt-2 text-center text-sm leading-5 text-orange-600">
                        Login permitted only for the websites owner.
                    </p>
                </div>
                <form className="mt-8" action="#" onSubmit={submitMethod}>
                    {lastResult || submittedToken === '' ? (
                        <></>
                    ) : (
                        <div className="rounded-md shadow-sm mb-3 bg-red-900 text-center py-2 lg:px-2">
                            <div
                                className="p-2 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                                role="alert"
                            >
                                <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                                    Error
                                </span>
                                <span className="font-semibold mr-2 text-left flex-auto">Wrong access token</span>
                            </div>
                        </div>
                    )}

                    <div className="rounded-md shadow-sm">
                        <div>
                            <input
                                onChange={(event) => setInputText(event.target.value)}
                                aria-label="Access Token"
                                name="access-token"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Access token"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition duration-150 ease-in-out"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg
                                    className="h-5 w-5 text-orange-500 group-hover:text-orange-400 transition ease-in-out duration-150"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

import path from 'path';
import React from 'react';

class ComplexIconProps {
    color: string;
}

export const ComplexIcons = {
    Find: (
        <>
            <svg
                className="inline"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-reactroot=""
            >
                <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M9.5 17C13.6421 17 17 13.6421 17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17Z"
                />
                <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="3"
                    stroke="currentColor"
                    d="M22 22L14.8 14.8"
                />
            </svg>
        </>
    ),
};

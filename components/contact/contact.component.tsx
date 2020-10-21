import React from 'react';
import { ContactInformation } from './info.component';
import { ContactSidebar } from './sidebar.component';
import Lottie from 'react-lottie';
import { ShapeAnimation } from '../../data/icons/animation-data/icons';

export const ContactComponent = (): JSX.Element => {
    return (
        <div className="relative bg-white">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-3 lg:px-8 lg:py-24 xl:pr-12">
                    <ContactSidebar />
                    <ContactInformation />
                </div>
                <div className="bg-white pb-16 px-4 sm:px-6 hidden lg:block lg:col-span-2 lg:pb-24 lg:px-8 xl:pl-12">
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <div className="h-full">
                            <Lottie
                                isClickToPauseDisabled={true}
                                style={{ cursor: 'default' }}
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: ShapeAnimation.Conversation,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

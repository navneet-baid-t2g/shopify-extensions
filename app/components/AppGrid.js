import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';
const apps = [
    {
        icon: '📱', // Replace with an image or icon if needed
        name: 'Shopify App 1',
        rating: 4.5,
        installs: '10K',
        description: 'This is a short description of Shopify App 1. It highlights key features and functionalities.',
        pricing: '$9.99',
        link: '/app1',
    },
    {
        icon: '💻',
        name: 'Shopify App 2',
        rating: 4.7,
        installs: '50K',
        description: 'This is a short description of Shopify App 2. It offers an exceptional experience for users.',
        pricing: '$19.99',
        link: '/app2',
    },
    // Add more apps as needed
];

const AppGrid = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-primary text-primary">
                        Apps
                    </span>
                    <h2 className="text-3xl font-semibold md:text-4xl xl:text-5xl leading-tight">Explore Our Top Apps
                    </h2>
                    <p className="text-gray-700">
                        We specialize in building apps that enhance your Shopify store's performance.
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {apps.map((app, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-6 transition-shadow border border-gray-200"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="text-4xl bg-gray-200 p-3 rounded-lg">{app.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800">{app.name}</h3>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                                <AiFillStar className="text-yellow-500 mr-1" />
                                <span className="font-medium text-gray-800">{app.rating}</span>
                                <span className="mx-2">|</span>
                                <span>{app.installs} installs</span>
                            </div>
                            <p className="text-gray-700 mb-4 text-left">{app.description}</p>
                            <p className="text-gray-900 font-semibold text-left">Starting at {app.pricing}</p>
                            <div className="flex justify-start mt-2">
                                <Link href="#" className="px-5 py-2.5 rounded-xl flex items-center rounded-lg bg-primary text-white transition ease-linear hover:bg-gray-900 flex items-center gap-x-3">
                                    View App   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppGrid;

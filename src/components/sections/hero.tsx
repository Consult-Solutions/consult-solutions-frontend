import React, { useState } from 'react';
import FetchLoader from '../loaders/fetching-loader.tsx';

interface HeroProps {
    onLoading?: Boolean;
    onChange?: (query: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onLoading, onChange }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onChange) onChange({ query: searchQuery });
    };

    const handleSearch = () => {
        if (onChange) onChange({ query: searchQuery });
    };

    return (
        <div className="relative bg-gradient-to-b from-[#061a35] to-[#05090c]">
            <section className="relative pt-20 pb-10 sm:pt-28 sm:pb-16 lg:min-h-[500px] lg:pb-24">
                <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-4xl font-bold sm:text-6xl">
                            <span className="bg-gradient-to-r from-[#3898c8] to-white bg-clip-text text-transparent "> Buy & Sell On #1 Marketplace for Cars in Africa </span>
                        </h1>

                        <p className="mt-5 text-sm text-semibold text-white sm:text-sm md:text-md">Discover a wide range of cars to suit every need and budget. Whether you're looking for the latest models, reliable used cars, or something in between, we have it all.</p>

                        <div className="flex flex-col items-center justify-center mt-12">
                            <div className='border border-gray-300 rounded-full pl-4 pr-2 py-2 w-full text-sm focus:outline-none flex items-center bg-white'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M18.93 20.689c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Search your desired property..."
                                    className="border-none font-bold outline-none focus:border-none focus:outline-none ml-3 bg-white w-full h-full text-slate-700"
                                />
                                <div className='hidden md:block'>
                                    {onLoading && <FetchLoader />}

                                    {!onLoading && <button onClick={handleSearch} className="inline-flex h-11 w-full items-center justify-center text-sm ml-10 rounded-full bg-primary px-5 font-medium tracking-wide text-white shadow-none outline-none transition duration-200 hover:bg-primary focus:ring sm:w-auto">
                                        <span className='uppercase'>Search</span>
                                    </button>}
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 px-20 text-left sm:grid-cols-3 sm:px-0">
                            <div className="flex items-center">
                                <svg className="flex-shrink-0" width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z" fill="#0B1715" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z" fill="#0B1715" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="ml-3 text-sm text-white">Over 12,000 Trusted Agencies</p>
                            </div>

                            <div className="flex items-center">
                                <svg className="flex-shrink-0" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7 12.6667L9.25 15L16 8" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="ml-3 text-sm text-white">No yearly charges, maximum limits</p>
                            </div>

                            <div className="flex items-center">
                                <svg className="flex-shrink-0" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 11H3C1.89543 11 1 11.8954 1 13V21C1 22.1046 1.89543 23 3 23H17C18.1046 23 19 22.1046 19 21V13C19 11.8954 18.1046 11 17 11Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 19C11.1046 19 12 18.1046 12 17C12 15.8954 11.1046 15 10 15C8.89543 15 8 15.8954 8 17C8 18.1046 8.89543 19 10 19Z" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15 7V6C15.0131 4.68724 14.5042 3.42303 13.5853 2.48539C12.6664 1.54776 11.4128 1.01346 10.1 1H10C8.68724 0.986939 7.42303 1.4958 6.48539 2.41469C5.54776 3.33357 5.01346 4.58724 5 5.9V7" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="ml-3 text-sm text-white">Secured & safe online Guidance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;

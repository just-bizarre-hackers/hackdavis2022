import React from "react";

const AboutCreators : React.FC = () => {
    return (
        <div className="w-full">
            <article className="w-full border-2 z-10 relative" />
            <h3 className="relative font-bold -top-5 z-20 text-3xl pr-16 bg-white lg:w-max max-w-screen">
                About <span className="text-themeBlue underline">SmartAllergy</span> Creators
            </h3>
            <article className="py-8 lg:p-8 flex flex-col space-y-4">
                <div className="w-full grid grid-cols-4 md:grid-cols-5">
                    <article className="col-span-1">
                        <h4 className="font-semibold text-2xl">Bailey Franzen</h4>
                    </article>
                    <article className="col-span-3 md:col-span-4 px-8">
                        <p>
                            I am Bailey! 
                        </p>
                    </article>
                </div>
                <div className="w-full grid grid-cols-4 md:grid-cols-5">
                    <article className="col-span-1">
                        <h4 className="font-semibold text-2xl">Haneul Choi</h4>
                    </article>
                    <article className="col-span-3 md:col-span-4 px-8">
                        <p>
                            I am Haneul! 
                        </p>
                    </article>
                </div>
                <div className="w-full grid grid-cols-4 md:grid-cols-5">
                    <article className="col-span-1">
                        <h4 className="font-semibold text-2xl">Jennifer Kim</h4>
                    </article>
                    <article className="col-span-3 md:col-span-4 px-8">
                        <p>
                            I am Jennifer! 
                        </p>
                    </article>
                </div>
            </article>
        </div>
    )
};

export default AboutCreators;
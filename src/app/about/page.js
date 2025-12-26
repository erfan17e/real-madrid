'use client';
import React from "react";
import { useQRCode } from "next-qrcode";

const About = () => {

    const { Canvas } = useQRCode();

    return (
        <>
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-purple-600/20">
                </div>
                <div className="w-11/12 mx-auto px-4 text-center relative z-10">
                    <div className="flex justify-center items-center">
                        <Canvas
                            text={'https://www.real-madrid-erfan-arezi.vercel.app'}
                            options={{
                                errorCorrectionLevel: 'H',
                                width: 300
                            }}
                        />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Erfan Arezi</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6">
                        Full-stack developer (MERN stack) and passionate about UI design.
                    </p>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
                    <div className="flex flex-wrap justify-center gap-4 text-lg">
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            React Specialist
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            Problem Solver
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            Clean Code Advocate
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="w-11/12 mx-auto px-4 py-16">

                <div className="text-center text-4xl font-bold text-gray-800 mb-12 max-sm:text-xl">This website was created and published in late 2025, and its sole purpose is to provide content for the Advanced Accounting 1 class.
                </div>

                {/* About Me Section */}
                <div className="w-full">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="max-sm:text-center">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">My Story</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Hello! I{"'"}m Erfan, a passionate full-stack developer with over 5 years of experience
                                    creating digital experiences that make a difference. My journey in web development
                                    started when I built my first website at 16, and since then, I{"'"}ve been constantly
                                    learning and evolving with the ever-changing tech landscape.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    I specialize in modern JavaScript frameworks, particularly React.js, and I have
                                    a keen eye for creating intuitive, responsive, and user-friendly interfaces.
                                    I believe that great code is not just about functionality, but also about
                                    maintainability and scalability.
                                </p>
                                <div className="flex flex-wrap gap-4 max-sm:justify-evenly">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-yellow-600">50+</div>
                                        <div className="text-gray-600">Projects</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-yellow-600">3+</div>
                                        <div className="text-gray-600">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-yellow-600">100%</div>
                                        <div className="text-gray-600">Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 text-white text-center">
                                <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
                                <p className="leading-relaxed mb-6">
                                    {'"'}I believe that every line of code should tell a story of efficiency,
                                    every design should speak the language of intuition, and every project
                                    should be a testament to passion meeting precision.{'"'}
                                </p>
                                <div className="w-16 h-1 bg-white mx-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="max-w-4xl mx-auto mt-20 text-center">
                    <div className="bg-gradient-to-r from-gray-800 to-yellow-900 text-white rounded-2xl p-12 shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">Let{"'"}s Work Together</h3>
                        <p className="text-xl leading-relaxed mb-6">
                            I{"'"}m always interested in new challenges and opportunities to create
                            something amazing.
                            My skills include HTML, CSS, Tailwind, JavaScript, React.js, Next.js, and TypeScript in front-end development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://t.me/erfan_blackk" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                                CONTACT THE DEVELOPER
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
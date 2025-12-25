'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const slides = [
        {
            id: 1,
            image: "/images/sliderPics/realMadridLogo.jpg",
            title: "THE ROYAL CLUB",
            subtitle: "Honor, Tradition & Victory",
            description: "Experience the legacy of the most successful football club in history",
            badge: "LEGENDARY"
        },
        {
            id: 2,
            image: "/images/sliderPics/championsLeague.webp",
            title: "15-TIME CHAMPIONS",
            subtitle: "Kings of Europe",
            description: "Record 15 UEFA Champions League titles and counting",
            badge: "CHAMPIONS"
        },
        {
            id: 3,
            image: "/images/sliderPics/santiagoBernabeu.jpg",
            title: "SANTIAGO BERNABÉU",
            subtitle: "The Temple of Football",
            description: "Witness the magic at one of the world's most iconic stadiums",
            badge: "ICONIC"
        },
        {
            id: 4,
            image: "/images/sliderPics/ardaGuler.webp",
            title: "GALACTICOS LEGACY",
            subtitle: "Stars of Tomorrow",
            description: "Witness the next generation of football legends in action",
            badge: "STARS"
        },
        {
            id: 5,
            image: "/images/sliderPics/shop.webp",
            title: "OFFICIAL STORE",
            subtitle: "Wear Your Colors",
            description: "Get the latest official kits and merchandise",
            badge: "NEW"
        }
    ];

    useEffect(() => {
        let interval;
        interval = setInterval(() => {
            if (currentSlide === 5) {
                setCurrentSlide(1);
                return;
            }
            setCurrentSlide(prevSlide => prevSlide + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gray-900">
            {/* Main Slider */}
            <div className="relative w-full h-full transition-transform duration-1000 ease-out">
                {slides.map(slide => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ${slide.id === currentSlide
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-105'
                            }`}
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                className="object-cover"
                                fill
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex items-center h-full">
                            {/* <div className="container mx-auto px-4 md:px-6 lg:px-8"> */}
                            <div className="w-11/12 mx-auto px-4 md:px-6 lg:px-8">
                                <div className="max-w-2xl">
                                    {/* Badge */}
                                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 mb-6">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
                                        <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
                                            {slide.badge}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                                        {slide.title}
                                    </h1>

                                    {/* Subtitle */}
                                    <h2 className="text-xl md:text-2xl lg:text-3xl text-yellow-400 font-semibold mb-6">
                                        {slide.subtitle}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {slides.map(slide => (
                    <button
                        key={slide.id}
                        onClick={() => { setCurrentSlide(slide.id) }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === slide.id
                            ? 'bg-yellow-500 scale-125 shadow-lg shadow-yellow-500/50'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${slide.id}`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-8 right-8 z-20 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                <span className="text-yellow-400 font-bold">{currentSlide}</span>
                <span className="text-white/70"> / {slides.length}</span>
            </div>


            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-transparent to-purple-500 mix-blend-overlay"></div>
            </div>
        </div>
    );
};

export default Slider;
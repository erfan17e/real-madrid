'use client';

import LegendCard from '@/components/legends/legendCard';
import LegendModal from '@/components/legends/legendMoadl';
import FilterTabs from '@/components/ui/filterTabs';
import PageTitle from '@/components/ui/pageTitle';
import StaticSection from '@/components/ui/staticSection';
import useTabsMenu from '@/hooks/useTabsMenu';
import React, { useState } from 'react';

const Legends = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedLegend, setSelectedLegend] = useState(null);

    const legends = {
        groups: ['classic', 'modern', 'contemporary'],
        data: [
            {
                id: 1,
                name: "Alfredo Di Stéfano",
                position: "Forward",
                years: "1953-1964",
                nationality: "Argentina",
                appearances: 396,
                goals: 308,
                trophies: 8,
                image: "/images/legends/alfredoDiStefano.jpg",
                type: 'classic',
                description: "The Blond Arrow, considered one of the greatest players of all time and the soul of Real Madrid's early European dominance.",
                highlights: ["5 European Cups", "8 La Liga titles", "2 Ballon d'Or"]
            },
            {
                id: 2,
                name: "Ferenc Puskás",
                position: "Forward",
                years: "1958-1966",
                nationality: "Hungary",
                appearances: 262,
                goals: 242,
                trophies: 5,
                image: "/images/legends/ferencPuskas.jpg",
                type: 'classic',
                description: "The Galloping Major, known for his incredible left foot and goal-scoring prowess.",
                highlights: ["3 European Cups", "5 La Liga titles", "4x Pichichi Trophy"]
            }, {
                id: 3,
                name: "Raúl González",
                position: "Forward",
                years: "1994-2010",
                nationality: "Spain",
                appearances: 741,
                goals: 323,
                trophies: 16,
                image: "/images/legends/raulGonzalez.jpg",
                type: 'modern',
                description: "The eternal captain, symbol of La Fabrica and one-club loyalty.",
                highlights: ["3 Champions League", "6 La Liga titles", "All-time top scorer until 2009"]
            },
            {
                id: 4,
                name: "Zinedine Zidane",
                position: "Midfielder",
                years: "2001-2006",
                nationality: "France",
                appearances: 227,
                goals: 49,
                trophies: 6,
                image: "/images/legends/zinedineZidane.jpg",
                type: 'modern',
                description: "The maestro, known for his elegance, vision, and unforgettable volley in Glasgow.",
                highlights: ["1 Champions League", "1 La Liga", "2002 Ballon d'Or", "FIFA World Player of the Year"]
            }, {
                id: 5,
                name: "Cristiano Ronaldo",
                position: "Forward",
                years: "2009-2018",
                nationality: "Portugal",
                appearances: 438,
                goals: 450,
                trophies: 16,
                image: "/images/legends/cristianoRonaldo.jpg",
                type: 'contemporary',
                description: "The ultimate goal machine, shattered records and led Real Madrid to unprecedented European success.",
                highlights: ["4 Champions League", "2 La Liga titles", "4 Ballon d'Or", "All-time top scorer"]
            },
            {
                id: 6,
                name: "Sergio Ramos",
                position: "Defender",
                years: "2005-2021",
                nationality: "Spain",
                appearances: 671,
                goals: 101,
                trophies: 22,
                image: "/images/legends/sergioRamos.jpg",
                type: 'contemporary',
                description: "El Capitán, the heart and soul of Real Madrid's modern era, known for his leadership and clutch goals.",
                highlights: ["4 Champions League", "5 La Liga titles", "93rd minute equalizer vs Atletico"]
            }
        ]
    };

    const staticData = [
        { label: 'TOTAL LEGENDS', value: '24', color: 'text-blue-600' },
        { label: 'BALLON D\'OR WINS', value: '12', color: 'text-green-600' },
        { label: 'CHAMPIONS LEAGUES', value: '14', color: 'text-yellow-600' },
        { label: 'GENERATIONS', value: '7+', color: 'text-purple-600' }
    ];

    const getTabsMenu = useTabsMenu(legends);

    return (
        <>

            {/* Hero Section */}
            <PageTitle
                title={'THE LEGENDS'}
                description={'Celebrating the immortal heroes who built the greatest club in football history'}
            />

            {/* Main Content */}
            <main className="w-11/12 mx-auto px-4 py-16">
                <FilterTabs
                    tabs={getTabsMenu}
                    currentTab={activeTab}
                    changeTabMethod={setActiveTab}
                />

                {/* Legends Grid */}
                <div className="flex flex-wrap justify-evenly gap-6">
                    {activeTab === 'all' ?
                        legends.data.map(legend => <LegendCard key={legend.id} legend={legend} openModalMethod={setSelectedLegend} />) :
                        legends.data.filter(legend => legend.type === activeTab).map(legend => <LegendCard key={legend.id} legend={legend} openModalMethod={setSelectedLegend} />)}
                </div>

                {/* Legacy Statistics */}
                <StaticSection
                    title={'LEGACY IN NUMBERS'}
                    data={staticData}
                />

                {/* Hall of Fame Message */}
                <div className="max-w-4xl mx-auto mt-20 text-center">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl p-12 shadow-2xl text-center">
                        <h3 className="text-3xl font-bold mb-4">IMMORTAL LEGACY</h3>
                        <p className="text-xl leading-relaxed">
                            {'"These legends didn\'t just play for Real Madrid - they embodied its values,defined its history, and built the foundation for eternal greatness.Their legacy continues to inspire every player who wears the famous white shirt."'}
                        </p>
                    </div>
                </div>
            </main>


            {/* Legend Modal */}
            {selectedLegend && (
                <LegendModal
                    legend={selectedLegend}
                    onClose={() => setSelectedLegend(null)}
                />
            )}
        </>
    );
};

export default Legends;
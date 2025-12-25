'use client';
import PlayerCard from '@/components/squad/playerCard';
import PlayerModal from '@/components/squad/playerModal';
import FilterTabs from '@/components/ui/filterTabs';
import PageTitle from '@/components/ui/pageTitle';
import StaticSection from '@/components/ui/staticSection';
import useTabsMenu from '@/hooks/useTabsMenu';
import React, { useState } from 'react';

const Squad = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const squad = {
        groups: ['goalkeepers', 'defenders', 'midfielders', 'forwards'],
        data: [
            {
                id: 1,
                name: "Thibaut Courtois",
                number: 1,
                type: "goalkeepers",
                nationality: "Belgium",
                age: 31,
                height: 200,
                joined: "2018",
                image: "/images/squad/thibautCourtois.webp",
                stats: { appearances: 45, abilityName: 'Clean Sheets', abilityNumber: 28 },
            }, {
                id: 2,
                name: "Dani Carvajal",
                number: 2,
                type: "defenders",
                nationality: "Spain",
                age: 31,
                height: 173,
                joined: "2013",
                image: "/images/squad/daniCarvajal.jpg",
                stats: { appearances: 38, abilityName: 'Assists', abilityNumber: 12 },
            },
            {
                id: 3,
                name: "David Alaba",
                number: 4,
                type: "defenders",
                nationality: "Austria",
                age: 31,
                height: 180,
                joined: "2021",
                image: "/images/squad/davidAlaba.webp",
                stats: { appearances: 42, abilityName: 'Goals', abilityNumber: 3 },
            },
            {
                id: 4,
                name: "Éder Militão",
                number: 3,
                type: "defenders",
                nationality: "Brazil",
                age: 25,
                height: 186,
                joined: "2019",
                image: "/images/squad/ederMilitao.webp",
                stats: { appearances: 40, abilityName: 'Goals', abilityNumber: 5 },
            }, {
                id: 5,
                name: "Luka Modrić",
                number: 10,
                type: "midfielders",
                nationality: "Croatia",
                age: 38,
                height: 172,
                joined: "2012",
                image: "/images/squad/lukaModric.jpg",
                stats: { appearances: 44, abilityName: 'Assists', abilityNumber: 15 },
            },
            {
                id: 6,
                name: "Jude Bellingham",
                number: 5,
                type: "midfielders",
                nationality: "England",
                age: 20,
                height: 186,
                joined: "2023",
                image: "/images/squad/judeBellingham.webp",
                stats: { appearances: 35, abilityName: 'Goals', abilityNumber: 22 },
            },
            {
                id: 7,
                name: "Federico Valverde",
                number: 15,
                type: "midfielders",
                nationality: "Uruguay",
                age: 25,
                height: 182,
                joined: "2016",
                image: "/images/squad/federicoValverde.webp",
                stats: { appearances: 48, abilityName: 'Goals', abilityNumber: 14 },
            },
            {
                id: 11,
                name: "Eduardo Camavinga",
                number: 12,
                type: "midfielders",
                nationality: "France",
                age: 21,
                height: 182,
                joined: "2021",
                image: "/images/squad/eduardoCamavinga.webp",
                stats: { appearances: 52, abilityName: 'Assists', abilityNumber: 8 },
            }, {
                id: 8,
                name: "Vinicius Junior",
                number: 7,
                type: "forwards",
                nationality: "Brazil",
                age: 23,
                height: 176,
                joined: "2018",
                image: "/images/squad/viniciusJunior.jpg",
                stats: { appearances: 42, abilityName: 'Goals', abilityNumber: 24 },
            },
            {
                id: 9,
                name: "Rodrygo",
                number: 11,
                type: "forwards",
                nationality: "Brazil",
                age: 23,
                height: 174,
                joined: "2019",
                image: "/images/squad/rodrygo.jpg",
                stats: { appearances: 46, abilityName: 'Goals', abilityNumber: 19 },
            },
            {
                id: 10,
                name: "Kylian Mbappé",
                number: 77,
                type: "forwards",
                nationality: "France",
                age: 25,
                height: 178,
                joined: "2024",
                image: "/images/squad/mbappe.webp",
                stats: { appearances: 45, abilityName: 'Goals', abilityNumber: 42 },
            }
        ]
    };

    const staticData = [
        { label: 'TOTAL PLAYERS', value: '24', color: 'text-blue-600' },
        { label: 'AVERAGE AGE', value: '26.4', color: 'text-green-600' },
        { label: 'INTERNATIONAL PLAYERS', value: '9', color: 'text-yellow-600' },
        { label: 'SEASON GOALS', value: '89', color: 'text-purple-600' },
    ]

    const getTabsMenu = useTabsMenu(squad);

    return (
        <>
            {/* Hero Section */}
            <PageTitle
                title={'FIRST TEAM SQUAD'}
                description={'Meet the stars that make Real Madrid the most successful club in football history'}
            />

            {/* Main Content */}
            <main className="w-11/12 mx-auto px-4 py-12">

                {/* Filter Tabs */}
                <FilterTabs
                    tabs={getTabsMenu}
                    currentTab={activeTab}
                    changeTabMethod={setActiveTab}
                />

                {/* Players section */}
                <div className="flex flex-wrap gap-6 justify-evenly">
                    {activeTab === 'all' ?
                        squad.data.map(player => <PlayerCard key={player.id} player={player} openModalMethod={setSelectedPlayer} />) :
                        squad.data.filter(player => player.type === activeTab).map(player => <PlayerCard key={player.id} player={player} openModalMethod={setSelectedPlayer} />)}
                </div>

                {/* Team Statistics */}
                <StaticSection
                    title={'TEAM STATISTICS'}
                    data={staticData}
                />
            </main>

            {/* Player Modal */}
            {selectedPlayer && (
                <PlayerModal
                    player={selectedPlayer}
                    onClose={() => setSelectedPlayer(null)}
                />
            )}
        </>
    );
};

export default Squad;
'use client';

import PageTitle from "@/components/ui/pageTitle";
import { useState } from "react";
import FilterTabs from "@/components/ui/filterTabs";
import useTabsMenu from "@/hooks/useTabsMenu";
import MatchCard from "@/components/matches/matchCard";
import StaticSection from "@/components/ui/staticSection";

const Matches = () => {
    const [activeTab, setActiveTab] = useState('all');

    const matches =
    {
        groups: ['live', 'past', 'upcoming'],
        data: [
            {
                id: 1,
                date: "2024-02-18",
                competition: "La Liga",
                homeTeam: "Real Madrid",
                homeTeamLogo: '/images/clubLogos/realMadridLogo.png',
                awayTeam: "Sevilla FC",
                awayTeamLogo: '/images/clubLogos/sevillaLogo.png',
                homeScore: 1,
                awayScore: 0,
                type: "live",
                minute: "67'",
                venue: "Santiago Bernabéu",
                broadcast: "ESPN",
                link: 'https://www.aparatsport.ir/#match-lives'
            },
            {
                id: 2,
                date: "2024-02-10",
                competition: "La Liga",
                homeTeam: "Real Madrid",
                homeTeamLogo: '/images/clubLogos/realMadridLogo.png',
                awayTeam: "Girona FC",
                awayTeamLogo: '/images/clubLogos/gironaLogo.png',
                homeScore: 4,
                awayScore: 0,
                type: "past",
                venue: "Santiago Bernabéu",
                highlights: "https://example.com/highlights1",
                link: 'https://video.varzesh3.com/video/324373/%D8%AE%D9%84%D8%A7%D8%B5%D9%87-%D8%A8%D8%A7%D8%B2%DB%8C-%D8%B1%D9%8A%D9%94%D8%A7%D9%84-%D9%85%D8%A7%D8%AF%D8%B1%DB%8C%D8%AF-4-%D8%AE%DB%8C%D8%B1%D9%88%D9%86%D8%A7-0'
            },
            {
                id: 3,
                date: "2024-02-04",
                competition: "La Liga",
                homeTeam: "Atletico Madrid",
                homeTeamLogo: '/images/clubLogos/atleticoMadridLogo.png',
                awayTeam: "Real Madrid",
                awayTeamLogo: '/images/clubLogos/realMadridLogo.png',
                homeScore: 1,
                awayScore: 2,
                type: "past",
                venue: "Metropolitano Stadium",
                highlights: "https://example.com/highlights2",
                link: 'https://video.varzesh3.com/video/370035/%D8%AE%D9%84%D8%A7%D8%B5%D9%87-%D8%A8%D8%A7%D8%B2%DB%8C-%D8%B1%D9%8A%D9%94%D8%A7%D9%84-%D9%85%D8%A7%D8%AF%D8%B1%DB%8C%D8%AF-2-%D8%A7%D8%AA%D9%84%D8%AA%DB%8C%DA%A9%D9%88-%D9%85%D8%A7%D8%AF%D8%B1%DB%8C%D8%AF-1-%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4-%D8%A7%D8%AE%D8%AA%D8%B5%D8%A7%D8%B5%DB%8C'
            },

            {
                id: 4,
                date: "2024-02-25",
                competition: "La Liga",
                homeTeam: "Valencia CF",
                homeTeamLogo: '/images/clubLogos/valenciaLogo.png',
                awayTeam: "Real Madrid",
                awayTeamLogo: '/images/clubLogos/realMadridLogo.png',
                homeScore: null,
                awayScore: null,
                type: "upcoming",
                time: "21:00 CET",
                venue: "Mestalla Stadium",
                broadcast: "LaLiga TV",
                link: '/tickets'
            },
            {
                id: 5,
                date: "2024-03-02",
                competition: "La Liga",
                homeTeam: "Real Madrid",
                homeTeamLogo: '/images/clubLogos/realMadridLogo.png',
                awayTeam: "FC Barcelona",
                awayTeamLogo: '/images/clubLogos/barcelonaLogo.png',
                homeScore: null,
                awayScore: null,
                type: "upcoming",
                time: "18:30 CET",
                venue: "Santiago Bernabéu",
                broadcast: "ESPN",
                link: '/tickets'
            }
        ]
    };

    const staticData = [
        { label: 'MATCHES PLAYED', value: '30', color: 'text-blue-600' },
        { label: 'WINS', value: '22', color: 'text-green-600' },
        { label: 'GOALS SCORED', value: '64', color: 'text-yellow-600' },
        { label: 'TOP SCORER', value: 'MBAPPE', color: 'text-purple-600' }
    ];

    const getTabsMenu = useTabsMenu(matches);

    return (
        <>
            {/* Hero Section */}
            <PageTitle
                title={'MATCHES & FIXTURES'}
                description={"Follow Real Madrid's journey through La Liga, Champions League, and all competitions"}
            />

            {/* Main Content */}
            <main className="w-11/12 mx-auto px-4 py-12" >
                <FilterTabs
                    tabs={getTabsMenu}
                    currentTab={activeTab}
                    changeTabMethod={setActiveTab}
                />

                {/* Matches Section */}
                <div className="flex flex-wrap gap-8 justify-between">
                    {
                        activeTab === 'all' ?
                            matches.data.map(match => <MatchCard key={match.id} match={match} />) :
                            matches.data.filter(match => match.type === activeTab).map(match => <MatchCard key={match.id} match={match} />)
                    }
                </div>

                {/* Statistics Section */}
                <StaticSection
                    data={staticData}
                    title={'SEASON STATISTICS'}
                />
            </main >
        </>
    );
};

export default Matches;
import HeroSection from "@/components/home/heroSection";
import MainContent from "@/components/home/mainContent";
import NextMatch from "@/components/home/nextMatch";
import Slider from '@/components/home/slider';

export const metadata = {
    title: 'Real Madrid | Home',
    description: "Welcome to the official Real Madrid website. Discover the latest news, history, trophies, and official store."
}

const Home = () => {

    return (
        <>
            {/* Hero Section (for demonstration) */}
            <HeroSection />

            {/* Main Content (placeholder) */}
            <MainContent />

            {/* Next Match */}
            <NextMatch />

            {/* Slider */}
            <Slider />
        </>
    );
};

export default Home;

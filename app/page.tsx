import CardsMoving from "@/components/CardsMoving";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MeetArtists from "@/components/MeetArtists";
import Webinars from "@/components/Webinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { main } from "motion/react-client";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection></HeroSection>
   <FeaturedCourses></FeaturedCourses>
   <WhyChooseUs></WhyChooseUs>
   <CardsMoving></CardsMoving>
   <Webinars></Webinars>
   <MeetArtists></MeetArtists>
   <Footer></Footer>
   </main>
  );
}

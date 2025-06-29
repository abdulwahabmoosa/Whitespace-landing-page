


import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import ProjectManagementSection from "@/components/organisms/ProjectManagement";
import WorkTogetherSection from "@/components/organisms/WorkTogetherSection";
import UseExtensionSection from "@/components/organisms/UseExtensionSection";
import CustomiseSection from "@/components/organisms/CustomiseSection";
import PricingSection from "@/components/organisms/PricingSection";
import YourWorkSection from "@/components/organisms/YourWorkSection";
import DataSection from "@/components/organisms/DataSection";
import SponsorsSection from "@/components/organisms/SponsorsSection";
import FavouriteSection from "@/components/organisms/FavouriteSection";
import ReviewSection from "@/components/organisms/ReviewSection";
import FinalSection from "@/components/organisms/FinalSection";
import FooterSection from "@/components/organisms/FooterSection";

export default function HomePage() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <ProjectManagementSection />
      <WorkTogetherSection />
      <UseExtensionSection />
      <CustomiseSection />
      <PricingSection />
      <YourWorkSection />
      <DataSection />
      <SponsorsSection />
      <FavouriteSection />
      <ReviewSection />
      <FinalSection />
      <FooterSection />
      
      
      
    </main>
  );
}

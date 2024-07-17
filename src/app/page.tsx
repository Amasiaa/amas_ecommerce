import NavBar from "@/components/common/NavBar";
import BrowseTheRangeSection from "@/components/sections/BrowseTheRangeSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import OurProductSection from "@/components/sections/OurProductSection";
import RoomSection from "@/components/sections/RoomSection";
import ShareSetupSection from "@/components/sections/ShareSetupSection";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white">
      <NavBar />
      <HeroSection />
      <div className="flex flex-col gap-[56px]  mx-4 md:mx-[130px]">
        <BrowseTheRangeSection />
        <OurProductSection />
        {/* <RoomSection /> */}

      </div>
      <div className="mt-[56px]">
        <ShareSetupSection />
        <FooterSection />
      </div>

    </main>
  );
}

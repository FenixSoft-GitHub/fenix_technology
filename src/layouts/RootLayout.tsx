import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "@/components/shared/NavBar";
import { Footer } from "@/components/shared/Footer";
import Banner from "@/components/home/Banner";
// import BannerMobile from "@/components/home/BannerMobile";
import NewsLetter from "@/components/home/NewsLetter";
import { Sheet } from "@/components/shared/Sheet";
import { useGlobalStore } from "@/store/global.store";
import { NavbarMobile } from "@/components/shared/NavBarMobile";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollToTop from "@/components/shared/ScrollToTop";

export const RootLayout = () => {
  const { pathname } = useLocation();
  const isSheetOpen = useGlobalStore(state => state.isSheetOpen);
  const activeNavMobile = useGlobalStore(state => state.activeNavMobile);

  return (
    <div className="flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <NavBar />

      {pathname === "/" && (
        <>
          <div className="">
            <Banner />
          </div>
          {/* <div className="block sm:hidden">
            <BannerMobile />
          </div> */}
        </>
      )}

      <main className="flex-1 mt-24">
        <ScrollToTop />
        <Outlet />
      </main>

      {pathname === "/" && <NewsLetter />}

      {isSheetOpen && <Sheet />}

      {activeNavMobile && <NavbarMobile />}

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

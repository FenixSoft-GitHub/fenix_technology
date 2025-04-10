import { Outlet, useLocation } from "react-router-dom"
import { NavBar } from "@/components/shared/NavBar";
import { Footer } from "@/components/shared/Footer";
import Banner from "@/components/home/Banner";
import NewsLetter from "@/components/home/NewsLetter";
import { Sheet } from "@/components/shared/Sheet";
import { useGlobalStore } from "@/store/global.store";
import { NavbarMobile } from "@/components/shared/NavBarMobile";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export const RootLayout = () => {
  const { pathname } = useLocation();
  const isSheetOpen = useGlobalStore(state => state.isSheetOpen);
  const activeNavMobile = useGlobalStore(state => state.activeNavMobile);

  return (
    <div className="h-screen flex flex-col">
      <NavBar />

      {pathname === "/" && <Banner />}

      <main className="my-8 flex-1">
        <Outlet />
      </main>

      {pathname === "/" && <NewsLetter />}

      {isSheetOpen && <Sheet />}

      {activeNavMobile && <NavbarMobile />}

      <Footer />

      <WhatsAppButton />
    </div>
  )
}

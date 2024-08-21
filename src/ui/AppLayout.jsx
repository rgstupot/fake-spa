import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid grid-rows-[max-content_1fr] h-screen font-poppins">
      <header className="px-6 py-3 sticky top-0 left-0 w-full bg-pink-600 border-b-4 border-double border-pink-50">
        <Header />
      </header>
      <main className="pt-4 pb-6 px-6 bg-pink-600 overflow-y-scroll">
        <Outlet />
      </main>
      <footer className="px-6 py-3 bg-pink-600">
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;

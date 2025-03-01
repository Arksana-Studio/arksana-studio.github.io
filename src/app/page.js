import NavigationBar from "@components/NavigationBar";
import HomeView from "./home/HomeView";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <main className="items-center text-center min-h-screen">
      <NavigationBar/>
      <HomeView/>
      <Footer/>
    </main>
  );
}

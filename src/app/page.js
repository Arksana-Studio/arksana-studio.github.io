import HomeView from "@features/home/HomeView";
import NavigationBar from "@components/NavigationBar";

export default function HomePage() {
  return (
    <main className="items-center text-center min-h-screen">
      <NavigationBar/>
      <HomeView/>
    </main>
  );
}

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import SubMenu from "./Components/SubMenu";
import Team from "./Components/Team";
import { useGlobalContext } from "./context";
import Features from "./Components/Features";
import InfoCards from "./Components/InfoCards";
import Footer from "./Components/Footer";
import Testimonies from "./Components/Testimonies";

function App() {
  const { setNavId, setOpenSubMenu, openSubMenu } = useGlobalContext();

  const handleClick = () => {
    setNavId(0);
    setOpenSubMenu(false);
  };

  return (
    <div className="App">
      <Navbar />
      <SubMenu />
      <main
        onClick={handleClick}
        className={openSubMenu ? "darker" : undefined}
      >
        <Hero></Hero>
        <Team></Team>
        <Features />
        <InfoCards />
        <Testimonies />
        <Footer />
      </main>
    </div>
  );
}

export default App;

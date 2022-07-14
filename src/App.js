import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import SubMenu from "./Components/SubMenu";
import { useGlobalContext } from "./context";

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
      </main>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Loading from './components/Loading/Loading.tsx';
import Footer from "./components/Footer/Footer.tsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <>
          <Nav />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  )
}

export default App

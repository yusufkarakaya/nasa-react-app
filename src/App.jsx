import { useEffect, useState } from "react";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  useEffect(() => {
    async function fetcApiData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `apodData-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Data from local storage");
        return;
      }

      localStorage.clear();

      try {
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem(localKey, JSON.stringify(data));
        setData(data);
        console.log("Data from local storage");
      } catch (error) {
        console.error(error.message);
      }
    }
    fetcApiData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showSidebar && <Sidebar data={data} toggleSidebar={toggleSidebar} />}
      {data && <Footer data={data} toggleSidebar={toggleSidebar} />}
    </>
  );
}

export default App;

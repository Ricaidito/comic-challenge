import { useState, useEffect } from "react";
import axios from "axios";
import ComicList from "../../components/comic-list/comic-list";
import ComicGrid from "../../components/comic-grid/comic-grid";
import "./main-view.css";

const MainView = () => {
  const [comics, setComics] = useState([]);
  const [gridMode, setGridMode] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/comics`).then(res => {
      setComics(res.data.results);
    });
  }, [gridMode]);

  const handleViewChange = () => {
    setGridMode(!gridMode);
  };

  return (
    <div>
      <div>
        <h1 className="title">ComicBook</h1>
        <h2>Lastest Issues</h2>
      </div>
      <hr />
      <button onClick={handleViewChange}>Change view mode</button>
      <div>
        {gridMode ? (
          <ComicGrid comics={comics} />
        ) : (
          <ComicList comics={comics} />
        )}
      </div>
    </div>
  );
};

export default MainView;

import { useState, useEffect } from "react";
import axios from "axios";
import ComicList from "../../components/comic-list/comic-list";
import "./main-view.css";

const MainView = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/comics`).then(res => {
      setComics(res.data.results);
    });
  }, []);

  return (
    <div>
      <div>
        <h1 className="title">ComicBook</h1>
        <h2>Lastest Issues</h2>
      </div>
      <hr />
      <ComicList comics={comics} />
    </div>
  );
};

export default MainView;

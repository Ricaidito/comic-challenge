import { useState, useEffect } from "react";
import axios from "axios";
import ComicCard from "./components/comic-card/comic-card";
import "./App.css";

const App = () => {
  const [comics, setComics] = useState([]);
  const comicsList = comics.map(c => <ComicCard key={c.id} comic={c} />);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/comics`).then(res => {
      setComics(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <h1>ComicBook</h1>
      <h2>Lastest Issues</h2>
      {comicsList}
    </div>
  );
};

export default App;
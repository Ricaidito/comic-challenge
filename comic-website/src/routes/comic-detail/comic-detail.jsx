import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ComicDetail = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState({});

  // console.log(comic.character_credits);
  // console.log(comic.team_credits);
  // console.log(comic.location_credits);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/comic/${comicId}`).then(res => {
      setComic(res.data.results);
    });
  }, []);

  return (
    <div>
      <h1>ComicBook</h1>
      <img src={comic.image?.original_url} alt="comic-image" />
      <p>Given id: {comicId}</p>
    </div>
  );
};

export default ComicDetail;

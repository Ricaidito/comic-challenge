import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DetailsSection from "../../components/details-section/details-section";
import "./comic-detail.css";

const ComicDetail = () => {
  const { comicId } = useParams();
  const navigate = useNavigate();
  const [comic, setComic] = useState({});

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/comic/${comicId}`).then(res => {
      setComic(res.data.results);
    });
  }, []);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>ComicBook</h1>
      <div>
        <img
          className="details-img"
          src={comic.image?.original_url}
          alt="comic-image"
        />
        <DetailsSection title="Characters" credits={comic?.character_credits} />
        <DetailsSection title="Teams" credits={comic?.team_credits} />
        <DetailsSection title="Location" credits={comic?.location_credits} />
        <button onClick={handleGoBack}>Go back</button>
      </div>
    </div>
  );
};

export default ComicDetail;

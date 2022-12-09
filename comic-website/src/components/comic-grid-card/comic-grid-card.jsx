import { useNavigate } from "react-router-dom";
import "./comic-grid-card.css";

const ComicGridCard = ({ comic }) => {
  const { id, date_added, issue_number } = comic;
  const imageSrc = comic.image.original_url;
  const name = comic.name ? comic.name : comic.volume.name;
  const navigate = useNavigate();

  const handleImgClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <img
        className="comic-img"
        src={imageSrc}
        alt={`comic-${id}`}
        onClick={handleImgClick}
      />
      <p>
        {name} #{issue_number}
      </p>
      <span>{date_added}</span>
    </div>
  );
};

export default ComicGridCard;

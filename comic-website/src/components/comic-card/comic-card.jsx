import "./comic-card.css";

const ComicCard = ({ comic }) => {
  const { id, date_added, issue_number } = comic;
  const imageSrc = comic.image.original_url;
  const name = comic.name ? comic.name : comic.volume.name;

  return (
    <div>
      <img className="comic-img" src={imageSrc} alt={`comic-${id}`} />
      <p>
        {name} #{issue_number}
      </p>
      <span>{date_added}</span>
    </div>
  );
};

export default ComicCard;

import ComicGridCard from "../comic-grid-card/comic-grid-card";
import "./comic-grid.css";

const ComicGrid = ({ comics }) => {
  const comicsGrid = comics.map(c => <ComicGridCard key={c.id} comic={c} />);
  return <div className="grid-container">{comicsGrid}</div>;
};

export default ComicGrid;

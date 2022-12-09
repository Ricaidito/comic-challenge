import ComicListCard from "../comic-list-card/comic-list-card";
import "./comic-list.css";

const ComicList = ({ comics }) => {
  const comicsList = comics.map(c => <ComicListCard key={c.id} comic={c} />);
  return <div>{comicsList}</div>;
};

export default ComicList;

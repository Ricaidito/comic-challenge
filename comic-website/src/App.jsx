import { Route, Routes } from "react-router-dom";
import MainView from "./routes/main-view/main-view";
import ComicDetail from "./routes/comic-detail/comic-detail";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="details/:comicId" element={<ComicDetail />} />
    </Routes>
  );
};

export default App;

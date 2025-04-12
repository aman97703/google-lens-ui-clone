import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import TextSearchPage from "./Pages/TextSearch/TextSearchPage";
import ImageSearchPage from "./Pages/ImageSearch";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-search" element={<TextSearchPage />} />
        <Route path="/image-search" element={<ImageSearchPage />} />
      </Routes>
    </div>
  );
}

export default App;

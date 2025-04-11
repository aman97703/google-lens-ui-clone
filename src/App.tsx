import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import TextSearchPage from "./Pages/TextSearch/TextSearchPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-search" element={<TextSearchPage />} />
      </Routes>
    </div>
  );
}

export default App;

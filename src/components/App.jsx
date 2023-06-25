import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};

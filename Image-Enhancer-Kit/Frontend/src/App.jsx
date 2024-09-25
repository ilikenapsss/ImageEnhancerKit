import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Crop from "./Crop";
import EditImage from "./EditImage";
import Home from "./Home";
import Resize from "./Resize";
import AITags from "./AITags";
import ImageFormat from "./ImageFormat";
import Overlay from "./Overlay";

const App = () => {
  return (
    <Router>
      <div className="main_app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="crop" element={<Crop />} />
          <Route path="edit_image" element={<EditImage />} />
          <Route path="resize" element={<Resize />} />
          <Route path="aitags" element={<AITags />} />
          <Route path="format" element={<ImageFormat />} />
          <Route path="overlay" element={<Overlay/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

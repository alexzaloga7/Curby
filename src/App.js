import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Page/HomePage/HomePage";
import UploadPage from "./pages/Page/UploadPage/UploadPage";
import GalleryPage from "./pages/Page/GalleryPage/GalleryPage";
import SingleListing from "./pages/Page/SingleListing/SingleListing";
import GetStarted from "./pages/Page/GetStarted/GetStarted";
import Carousel from "./Components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<SingleListing />}></Route>
          {/* <Route path="/:id" element={<HomePage />}></Route> */}
          <Route path="/uploads" element={<UploadPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Page/HomePage/HomePage";
import VideoList from "./Components/VideoList/VideoList";
import UploadPage from "./pages/Page/UploadPage/UploadPage";
import ListingPage from "./pages/Page/ListingPage/ListingPage";
import SingleListing from "./pages/Page/SingleListing/SingleListing";

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
          <Route path="/listings" element={<ListingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

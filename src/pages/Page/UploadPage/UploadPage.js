import "./UploadPage.scss";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UploadIcon from "../../../assets/Icons/uploadicon.svg";

function UploadPage() {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const submit = event.target;
    const title = submit.title.value;
    const description = submit.description.value;
    const location = submit.location.value;

    if (!title || !description || !location || !image) {
      alert("Please enter all required fields to complete upload");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("image", image);

    axios
      .post("http://localhost:3001/items/", formData)
      .then(() => {
        alert("Uploaded successfully");
        navigate("/gallery");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to upload item");
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="upload">
      <NavBar />
      <div className="upload-section">
        <div className="upload-section__container">
          <div className="upload-image__container">
            {preview && (
              <img
                className="upload-image__preview"
                src={preview}
                alt="preview"
              />
            )}
            <label className="upload-file__label" htmlFor="file-input">
              Choose File
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="upload-file__input"
            />{" "}
          </div>

          <form onSubmit={handleSubmit} className="upload-form">
            <textarea
              name="title"
              className="upload-input"
              placeholder="Title"
            ></textarea>

            <textarea
              name="description"
              className="upload-input"
              placeholder="Description"
            ></textarea>

            <textarea
              name="location"
              className="upload-input"
              placeholder="Location"
            ></textarea>

            <div className="upload-button__container">
              <button type="submit" className="upload-button">
                <img
                  className="upload-button__icon"
                  src={UploadIcon}
                  alt="add button"
                ></img>
              </button>
              <Link to={"/"}>
                <p className="upload-button__cancel">Cancel</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UploadPage;

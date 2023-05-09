import "./UploadPage.scss";
import Header from "../../../Components/PageHeader/PageHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleMaps from "../../../Components/GoogleMaps/GoogleMaps";

function UploadPage() {
  // const [thumbnail, setThumbnail] = useState(null);
  const [videos, setVideos] = useState();

  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const submit = event.target;
  //   const title = submit.title.value;
  //   const description = submit.description.value;
  //   const location = submit.location.value;
  //   //
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   //
  //   if (!title || !description || !location) {
  //     alert(
  //       "please enter both title, description, location to complete upload"
  //     );
  //     return;
  //   } else {
  //     axios
  //       .post("http://localhost:3001/videos", {
  //         title,
  //         description,
  //         location,
  //         formData,
  //       })
  //       .then(() => {
  //         setVideos(videos);
  //         alert("Uploaded successfully");
  //         navigate("/listings");
  //       });
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const submit = event.target;
  //   const title = submit.title.value;
  //   const description = submit.description.value;
  //   const location = submit.location.value;

  //   if (!title || !description || !location || !image) {
  //     alert("Please enter all required fields to complete upload");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("image", image);

  //   axios
  //     .post("http://localhost:3001/videos/", formData)
  //     .then(() => {
  //       alert("Uploaded successfully");
  //       navigate("/listings");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       alert("Failed to upload video");
  //     });
  // };

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
      .post("http://localhost:3001/videos/", formData)
      .then(() => {
        alert("Uploaded successfully");
        navigate("/listings");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to upload video");
      });
  };

  // const handleThumbnailChange = (event) => {
  //   setThumbnail(event.target.files[0]);
  // };

  return (
    <div className="upload">
      <Header />
      <div className="upload__section">
        <div className="upload__main--container">
          <div className="upload__image--container">
            <h2 className="upload__subheader"> Upload Image</h2>
            <input
              type="file"
              // onChange={handleThumbnailChange}
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            {/* {thumbnail && (
              <img
                className="upload__image"
                src={URL.createObjectURL(thumbnail)}
                alt="video thumbnail"
              /> */}
            {/* )} */}
          </div>
          <form onSubmit={handleSubmit} className="upload__form">
            <h2 className="upload__subheader">Title</h2>
            <textarea
              name="title"
              className="upload__id"
              placeholder="Add a title for the item"
            ></textarea>
            <h2 className="upload__subheader">Description</h2>
            <textarea
              name="description"
              className="upload__id"
              placeholder="Add a brief description of the item"
            ></textarea>
            <h2 className="upload__subheader">Location</h2>
            <textarea
              name="location"
              className="upload__id"
              placeholder="Add location"
            ></textarea>

            <div className="upload__button--container">
              <button type="submit" className="upload__button">
                <p className="upload__button--text">Post</p>
              </button>
              <Link to={"/"}>
                <p className="upload__cancel">Cancel</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;

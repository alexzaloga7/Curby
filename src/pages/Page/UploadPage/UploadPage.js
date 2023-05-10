// import "./UploadPage.scss";
// import Header from "../../../Components/PageHeader/PageHeader";
// import Footer from "../../../Components/Footer/Footer";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import GoogleMaps from "../../../Components/GoogleMaps/GoogleMaps";

// function UploadPage() {
//   const [videos, setVideos] = useState();
//   const [preview, setPreview] = useState(null);

//   const [image, setImage] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const submit = event.target;
//     const title = submit.title.value;
//     const description = submit.description.value;
//     const location = submit.location.value;

//     if (!title || !description || !location || !image) {
//       alert("Please enter all required fields to complete upload");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("location", location);
//     formData.append("image", image);

//     axios
//       .post("http://localhost:3001/videos/", formData)
//       .then(() => {
//         alert("Uploaded successfully");
//         navigate("/listings");
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("Failed to upload video");
//       });
//   };

//   return (
//     <div className="upload">
//       <Header />
//       <div className="upload__section">
//         <div className="upload__main--container">
//           <div className="upload__image--container">
//             <h2 className="upload__subheader"> Upload Image</h2>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => {
//                 setImage(e.target.files[0]);
//               }}
//             />
//           </div>
//           <form onSubmit={handleSubmit} className="upload__form">
//             <h2 className="upload__subheader">Title</h2>
//             <textarea
//               name="title"
//               className="upload__id"
//               placeholder="Add a title for the item"
//             ></textarea>
//             <h2 className="upload__subheader">Description</h2>
//             <textarea
//               name="description"
//               className="upload__id"
//               placeholder="Add a brief description of the item"
//             ></textarea>
//             <h2 className="upload__subheader">Location</h2>
//             <textarea
//               name="location"
//               className="upload__id"
//               placeholder="Add location"
//             ></textarea>

//             <div className="upload__button--container">
//               <button type="submit" className="upload__button">
//                 <p className="upload__button--text">Post</p>
//               </button>
//               <Link to={"/"}>
//                 <p className="upload__cancel">Cancel</p>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default UploadPage;

import "./UploadPage.scss";
import Header from "../../../Components/PageHeader/PageHeader";
import Footer from "../../../Components/Footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleMaps from "../../../Components/GoogleMaps/GoogleMaps";
import UploadIcon from "../../../assets/Icons/uploadicon.svg";

function UploadPage() {
  const [videos, setVideos] = useState();
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
      <Header />
      <div className="upload__section">
        <div className="upload__main--container">
          <div className="upload__image--container">
            {preview && (
              <img
                className="upload__image-preview"
                src={preview}
                alt="preview"
              />
            )}
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <form onSubmit={handleSubmit} className="upload__form">
            <textarea
              name="title"
              className="upload__id"
              placeholder="Title"
            ></textarea>

            <textarea
              name="description"
              className="upload__id"
              placeholder="Description"
            ></textarea>

            <textarea
              name="location"
              className="upload__id"
              placeholder="Location"
            ></textarea>
            <GoogleMaps />

            <div className="upload__button--container">
              <button type="submit" className="upload__button">
                <div className="upload__button--text">
                  <img
                    className="footer-add"
                    src={UploadIcon}
                    alt="add button"
                  ></img>
                </div>
              </button>
              <Link to={"/"}>
                <p className="upload__cancel">Cancel</p>
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

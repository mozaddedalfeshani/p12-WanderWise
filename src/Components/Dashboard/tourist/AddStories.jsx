import axios from "axios";
import { AuthContext } from "../../../provider/AuthProvider";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HOST from "../../../constant/HOST";

const AddStories = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => {
      const updatedImages = [...prevImages, ...files];
      console.log(updatedImages);
      return updatedImages;
    });
  };
  const imageHostingKey = "79dae6d8e77e9a9a901c03b0dfa39f1d";
  const imageBB = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
  // This is the function that will be called when the form is submitted
  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    const text = event.target[1].value;
    const imageFiles = event.target[2].files;

    console.log(title, text, imageFiles);

    try {
      const imageUrls = await Promise.all(
        Array.from(imageFiles).map(async (imageFile) => {
          const formData = new FormData();
          formData.append("image", imageFile);

          const imageResponse = await axios.post(imageBB, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          return imageResponse.data.data.url;
        })
      );

      console.log("Image URLs:", imageUrls);
      const storyData = {
        title: title,
        content: text,
        images: imageUrls,
        email: user.email,
        author: user.displayName,
        image: user.photoURL,
        date: new Date().toISOString(),
        sharedCount: [],
      };

      await axios.post(`${HOST}/client/addStory`, storyData).then((res) => {
        console.log(res.data);
      });
      console.log("Story Data:", storyData);

      // Send the story data to the server

      // Redirect to manage story route
      navigate("/dashboard/manageStories");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Story</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Story:</span>
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="textarea textarea-bordered w-full"></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Images:</span>
          </label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="file-input file-input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Preview:</h2>
        <p className="mt-2">{title}</p>
        <p className="mt-2">{text}</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Upload Preview ${index + 1}`}
              className="w-full h-32 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddStories;

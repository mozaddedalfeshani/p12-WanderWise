import React, { useState } from "react";

const AddStories = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ title, text, images });
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
            className="textarea textarea-bordered w-full"
          ></textarea>
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
        <button type="submit" className="btn btn-primary">Submit</button>
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

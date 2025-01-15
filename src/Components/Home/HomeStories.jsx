import React from "react";
import HOST from "../../constant/HOST";
import axios from "axios";
import { Link } from "react-router-dom";
import { CiShare2 } from "react-icons/ci";
import { FacebookShareButton, FacebookIcon } from "react-share";

const HomeStories = () => {
  const [stories, setStories] = React.useState([]);
  React.useEffect(() => {
    const fetchStories = async () => {
      const response = await axios
        .get(`${HOST}/client/homeStories`)
        .then((res) => {
          console.log(res.data);
          setStories(res.data);
        });
    };
    fetchStories();
    console.log(stories);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center font-bold my-4">Our Stories</h1>
      <div className="card shadow-sm my-4 w-full flex items-center justify-center flex-row flex-wrap gap-4">
        {stories.map((item, index) => {
          return (
            <div
              key={index}
              className="card overflow-hidden h-[400px] shadow-xl w-96">
              <img
                src={item.image}
                alt="story"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.content}</p>
              </div>
              <div className="flex justify-end p-4">
                <FacebookShareButton
                  url={window.location.href}
                  className="btn px-5 btn-outline">
                  <CiShare2 /> Share
                </FacebookShareButton>
              </div>
            </div>
          );
        })}
      </div>
      {/* More Stories button  */}
      <Link
        to="/community"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        More Stories
      </Link>
    </div>
  );
};

export default HomeStories;

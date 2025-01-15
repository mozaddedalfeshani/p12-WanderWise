import React, { useContext } from "react";
import axios from "axios";
import HOST from "../../constant/HOST";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Community = () => {
  const [stories, setStories] = React.useState([]);

  React.useEffect(() => {
    const fetchStories = async () => {
      await axios.get(`${HOST}/client/userStories`).then((res) => {
        setStories(res.data);
        console.log(res.data);
      });
    };
    fetchStories();
  }, []);

  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-5 gap-2 w-full">
        {stories.map((story, index) => (
          <div key={index} className="card shadow-sm p-3 mb-5  rounded">
            <div className="card-header">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                <div className="flex-col flex justify-center ml-3 items-center">
                  <h1 className="text-center text-sm text-base-400 font-roboto">
                    {story.author}
                  </h1>
                  <p className="text-center text-xs text-base-300">
                    {story.date}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <figure>
                <img
                  src={story.image}
                  alt="story"
                  className="img-fluid rounded-md w-96 object-contain"
                />
              </figure>
              <h5 className="card-title">{story.title}</h5>
              <p className="card-text">{story.content}</p>
            </div>
            <div className="card-actions ">
              <div className="join join-horizontal ">
                <button className="btn join-item btn-ghost shadow-sm px-7">
                  <FcLike /> Love
                </button>
                <button className="btn join-item btn-ghost shadow-sm px-7">
                  <FaRegComment /> Comment
                </button>
                <FacebookShareButton
                  url={window.location.href}
                  className="btn join-item shadow-sm btn-ghost px-7">
                  <CiShare2 /> Share
                </FacebookShareButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Helmet>
        <title>Community</title>
        <meta
          name="description"
          content="Community page where users can share their stories"
        />
      </Helmet>
      {/* create floating button for adding new story  */}
      <div className="fixed bottom-5 right-5">
        {user ? (
          <button className="btn btn-primary shadow-lg">Add Story</button>
        ) : (
          <Link
            to="/login"
            state={{ form: "/community" }}
            className="btn btn-primary shadow-lg">
            Login to Create Story
          </Link>
        )}
      </div>
    </>
  );
};

export default Community;

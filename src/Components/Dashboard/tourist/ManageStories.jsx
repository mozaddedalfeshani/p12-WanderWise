import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import HOST from "../../../constant/HOST";
import { AuthContext } from "../../../provider/AuthProvider";

const ManageStories = () => {
  const [stories, setStories] = useState([]);
  const { user } = useContext(AuthContext);
  const [editingStory, setEditingStory] = useState(null);
  const [newContent, setNewContent] = useState("");

  const fetchStories = async () => {
    const response = await axios
      .get(`${HOST}/client/userStories/${user.email}`)
      .then((res) => {
        console.log(res.data);
        setStories(res.data);
      });
  };

  useEffect(() => {
    fetchStories();
  }, []);

  // delete story
  const deleteStory = async (id) => {
    const response = await axios
      .delete(`${HOST}/client/deleteStory/${id}`)
      .then((res) => {
        console.log(res.data);
        // Refetch stories after deletion
        fetchStories();
      });
  };

  // edit story
  const editStory = (story) => {
    setEditingStory(story);
    setNewContent(story.content);
  };

  const submitEdit = async () => {
    console.log("New Content:", newContent); // Log the new content
    const response = await axios
      .put(`${HOST}/client/updateStory/${editingStory._id}`, {
        content: newContent,
      })
      .then((res) => {
        console.log(res.data);
        // Refetch stories after editing
        fetchStories();
        setEditingStory(null);
      });
  };

  return (
    <div className="container mx-auto">
      <h1>Manage Stories</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="border">Title</th>
              <th className="border">Content</th>
              <th className="border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((story) => (
              <tr key={story._id}>
                <td className="border">{story.title}</td>
                <td className="border">{story.content}</td>
                <td className="border">
                  <button
                    className="btn btn-warning btn-sm mr-2"
                    onClick={() => editStory(story)}>
                    Edit
                  </button>
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => deleteStory(story._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingStory && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit Story</h3>
            <textarea
              className="textarea textarea-bordered w-full mt-4"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}></textarea>
            <div className="modal-action">
              <button className="btn" onClick={() => setEditingStory(null)}>
                Close
              </button>
              <button className="btn btn-primary" onClick={submitEdit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStories;

import React, { useState } from 'react';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [postText, setPostText] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [showPrivateError, setShowPrivateError] = useState(false);

  const privateHandle = () => {
    // Toggle isPrivate state
    setIsPrivate(!isPrivate);

    // Show an error message when Private checkbox is clicked
    setShowPrivateError(true);
  };

  const handlePostSubmit = () => {
    // Check if the post is private and show an error message if needed
    if (isPrivate) {
      alert('Private data are not shown');
      return;
    }

    // Create a new post object with timestamp
    const newPost = {
      username,
      text: postText,
      isPublic,
      isPrivate: isPrivate ? 'This information is not shown' : 'This information is shown',
      timestamp: new Date().toLocaleString(), // Include the timestamp
    };

    // Update the posts state with the new post
    setPosts([...posts, newPost]);

    // Clear input fields
    setUsername('');
    setPostText('');
    setShowPrivateError(false); // Reset the private error state
  };

  return (
    <div className="login-container">
      <h2>User Details</h2>
      {/* Form to submit a new post */}
      <div>
        <label>
          Pan No:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <input type="text" value={postText} onChange={(e) => setPostText(e.target.value)} />
        </label>
        <br />
        <label>
          Public:
          <input type="radio" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
        </label>
        <label htmlFor="privateCheckbox">
          Private:
          <input
            id="privateCheckbox"
            type="radio"
            onClick={privateHandle}
            checked={isPrivate}
            onChange={() => setIsPrivate(!isPrivate)}
          />
        </label>
        {showPrivateError && <small>Error: Private data are not shown</small>}
        <br />
        <button onClick={handlePostSubmit}>Submit The Personal Data</button>
      </div>

      {/* Display user details for public posts */}
      <div>
        {posts
          .filter((post) => post.isPublic)
          .map((post, index) => (
            <div key={index}>
              <p>Username: {post.username}</p>
              <p>Post: {post.text}</p>
              <p>Time: {post.timestamp}</p>
              {/* <p>isPrivate: {post.isPrivate}</p> */}
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;

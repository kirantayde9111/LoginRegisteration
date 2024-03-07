import { useState, useEffect } from "react";


const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState('');
  const [postType, setPostType] = useState('public');
  const [errorMsg, setErrorMsg] = useState(null);
  const [username, setUsername] = useState('');
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from local storage
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Update local storage when posts state changes
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handlePostSubmit = () => {

    const newPost = {
      username,
      postText:'',
      text: postText,
      postType,
      timestamp: new Date().toLocaleString(),
    };

    setPosts([...posts, newPost]);
    setPostText('');
    setIsSubmitted(true);

    if (postType === 'private') {
      setErrorMsg('Private data is not visible');
    }
  };
  const handleLogout = () => {
    // Add code to clear user-related data or perform any other necessary logout tasks
    // For example, redirecting to the login page
    window.location.href = "/register"; // Change "/login" to your actual login page path
  };

  return (
    <>
    
    
    <div className="login-container">
    
    <small className="text-danger">{errorMsg}</small>
    {isSubmitted && <small className="text-success">Data successfully submitted!</small>}<h2>User Details</h2>
      <h2>User Details</h2>
      <div>
        <br />
        <label>
          Message:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Public:
          <input value="public" type="radio" name="postType" checked={postType === 'public'} onChange={(e) => setPostType(e.target.value)} />
        </label>
        <label htmlFor="privateCheckbox">
          Private:
          <input
            id="privateCheckbox"
            value="private"
            type="radio"
            name="postType"
            checked={postType === 'private'}
            onChange={(e) => setPostType(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handlePostSubmit}>Submit The Personal Data</button>
        <button onClick={handleLogout} className='m-1' style={{ backgroundColor: '#333333' }}>Logout</button>
        {/* <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
        <MDBIcon fab icon='github' />
      </MDBBtn> */}
      </div>
    </div>
    
    <div className="row mt-3">
        {loading ? (
          <p>Loading...</p>
        ) : (
          posts
            .filter((post) => post.postType === 'public')
            .map((post, index) => (
              <div className="col-lg-4 col-md-4">
                <div key={index} className="card mb-3">
                  <div className="card-body">
                    <p>Username: {post.username}</p>
                    {/* THis code hide post fetch also */}
                    {/* <p>Post:{post.postText}</p> */}
                    <p>Time: {post.timestamp}</p>
                    <hr />
                    
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
      </>

  );
};

export default Dashboard;

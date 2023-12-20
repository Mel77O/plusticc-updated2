import React, { useState, useEffect } from 'react';
import Header from '../Header';
import './Map.css';

const Map = () => {
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);

  // Load posts from local storage on component mount
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('mapPosts')) || [];
    setPosts((prevPosts) => {
      // Only set posts if there are any stored posts
      return storedPosts.length > 0 ? storedPosts : prevPosts;
    });
  }, []);
  

  // Save posts to local storage whenever posts change
  useEffect(() => {
    localStorage.setItem('mapPosts', JSON.stringify(posts));
    console.log('Posts saved to local storage:', posts);
  }, [posts]);
  

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Convert image to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result.split(",")[1]; // Extract base64 part
      console.log('Base64 Image Data:', imageData);
  
      // Create a new post object
      const newPost = {
        id: new Date().getTime(),
        photo: `data:image/jpeg;base64,${imageData}`, // Add the data URL prefix
        location,
        description,
      };
  
      // Make a POST request to the backend
      fetch('http://localhost:8080/posts/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Post created successfully:', data);
  
          // Update the local state with the newly created post
          setPosts((prevPosts) => [...prevPosts, newPost]);
  
          // Reset the form after submission
          setPhoto(null);
          setLocation('');
          setDescription('');
        })
        .catch(error => {
          console.error('Error creating post:', error);
          // Handle errors, show a message to the user, etc.
        });
    };
  
    // Handle errors during image conversion
    reader.onerror = () => {
      console.error('Error converting image to base64');
    };
  
    if (photo) {
      reader.readAsDataURL(photo);
    }
  };
  

  return (
    <div>
        <Header/>
      <h2>Create a New Map Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Upload Photo:
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </label>

        <label>
          Location:
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>

        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>

        <button type="submit">Post</button>
      </form>

      {/* Display submitted posts */}
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.photo} alt="Post" style={{ maxWidth: '100%' }} />
          <p><strong>Location:</strong> {post.location}</p>
          <p><strong>Description:</strong> {post.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Map;

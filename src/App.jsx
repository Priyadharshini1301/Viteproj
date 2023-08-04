import React, { useState } from 'react';
import myimg from './priya.jpg';
import img1 from './image1.jpg'; // Import your movie images
import img2 from './image2.jpg';
import img3 from './image3.jpg';
import img4 from './image4.jpg';
import './App.css';
import { movies } from './movies'; // Import the movies array

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [displayMovieInfo, setDisplayMovieInfo] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setDisplayMovieInfo(false);
  };

  return (
    <div className={`App ${isAuthenticated ? 'blue-background' : ''}`}>
      <header className="App-header">
        {isAuthenticated ? (
          <div className="movie-details-bg">
            {displayMovieInfo ? (
              <div className="movie-list">
                {movies.map((movie, index) => (
                  <div key={index} className="relative mb-24">
                    {/* Select the appropriate image based on the movie index */}
                    <img src={index === 0 ? img1 : index === 1 ? img2 : index === 2 ? img3 : img4} alt={`Movie ${index + 1}`} className="w-24 h-69 absolute top-40/60 left-1/4 -translate-x-1/1" />
                    <p className="text-lg font-semibold">Movie Name: {movie.name}</p>
                    <p className="text-lg font-semibold">Released Year: {movie.year}</p>
                    <p className="text-lg font-semibold">Genre: {movie.genre}</p>
                    <p className="text-lg font-semibold">Ratings: {movie.ratings}</p>
                  </div>
                ))}
                <button
                  className="mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="personal-details-bg">
                {/* Display personal details */}
                <img src={myimg} alt="Priya" className="w-24 h-66 absolute top-30/40 left-1/4 -translate-x-1/4" />
                <div className="text-center"> {/* Center-align login page content */}
                  <div className="text-left font-bold text-black-500">
                    <p> Name: Priya Dharshini G </p>
                    <p> From: Tiruppur</p>
                    <p> Age: 19</p>
                  </div>
                  <button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setDisplayMovieInfo(true)}
                  >
                    Show Movies Wishlist
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="login-page-bg text-center">
            <div className="flex flex-col items-center"> {/* Center-align login page content */}
            <h2 className="text-2xl font-bold mb-4">WELCOME TO PRIYA'S MOVIE REVIEW !</h2>
            </div>
            <button
                className="mb-36 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleLogin}
              >
                Login
              </button>
              
          </div>
        )}
        
      </header>
    </div>
  );
}

export default App;

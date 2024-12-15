import React, { useState } from "react";
import '../index.css'
import img1 from "../assets/portfolio/api.jpg"
import img2 from "../assets/portfolio/apod.jpg"


const images = [
  { id: 1, url: img1, category: "html" },
  { id: 2, url: img2, category: "html" },
  { id: 3, url: "https://via.placeholder.com/200", category: "Mern" },
  { id: 4, url: "https://via.placeholder.com/200", category: "React" },
  { id: 5, url: "https://via.placeholder.com/200", category: "JavaScript" },
  { id: 6, url: "https://via.placeholder.com/200", category: "JavaScript" },
  { id: 7, url: "https://via.placeholder.com/200", category: "React" },
  { id: 8, url: "https://via.placeholder.com/200", category: "React" },
  { id: 9, url: "https://via.placeholder.com/200", category: "Mern" },


];

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    
    <div className="gallery portfolio">
      <h1 className="port">My Portoflio</h1>
     <div className="filters">
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("html")}>HMTL&CSS</button>
        <button onClick={() => handleFilterChange("JavaScript")}>JavaScript</button>
        <button onClick={() => handleFilterChange("React")}>React</button>
        <button onClick={() => handleFilterChange("Mern")}>MERN</button>

      </div>
      <div className="image-grid">
        {filteredImages.map((image) => (
          <div className="image-card" key={image.id}>
            <img src={image.url} alt={image.category} />
            <div className="buttons">
              <a href="#demo" className="btn demo">Demo</a>
              <a href="#github" className="btn github">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

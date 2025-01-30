import React, { useState } from "react";
import "../index.css";
// import img1 from "../assets/portfolio/api.jpg"
// import img2 from "../assets/portfolio/apod.jpg"

const images = [
  {
    id: 1,
    url: "https://artificialintelligence-three.vercel.app/images/robot.png",
    category: "JavaScript",
    title: "Simple AI JS",
    demo: "https://travel-dost.vercel.app/",
    github: "https://github.com/bipulchhetri/Hotel-Booking-Website",
  },

  {
    id: 2,
    url: "https://i.ytimg.com/vi/1TFwEWwXWbw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJ6zR4szTDpU8r6Z1LZgNfCuw5WQ",
    category: "JavaScript",
    title: "TEXT TO SPEECH ",
    demo: "https://textstospeechconverter.netlify.app/",
    github: "https://github.com/bipulchhetri/Hotel-Booking-Website",
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0PVl3tWPW8jMk9hL18YrqDWKpQSwtA9Wog&s",
    category: "html",
    title: "Travel Website ",
  },
  // { id: 4, url: "https://via.placeholder.com/200", category: "React" },
  {
    id: 5,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDLMWSWyfLAmxHsjoPSVDU0XCoDmBr9Oy9Q&s",
    category: "html",
    title: "Organic Store",
  },
  // {
  //   id: 6,
  //   url: "https://via.placeholder.com/200",
  //   category: "JavaScript",
  //   title: "API Project",
  // },
  // { id: 7, url: "", category: "React" },
  {
    id: 8,
    url: "https://pocket-note-app-six.vercel.app/static/media/notes-main.981e2e07f14cd4175925.png",
    category: "React",
    title: "POECKET NOTE",
  },
  {
    id: 9,
    url: "https://miro.medium.com/v2/resize:fit:1132/format:webp/1*DQAVyAM94Q88sk5Pq1iOJg.png",
    category: "Mern",
    title: "URL SHORTENER",

  },
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
        <button onClick={() => handleFilterChange("JavaScript")}>
          JavaScript
        </button>
        <button onClick={() => handleFilterChange("React")}>React</button>
        <button onClick={() => handleFilterChange("Mern")}>MERN</button>
      </div>
      <div className="image-grid">
        {filteredImages.map((image) => (
          <div className="image-card" key={image.id}>
            <img src={image.url} alt={image.category} />
            <div></div>

            <div className="buttons">
              <p
                className="text-xl text-transform: uppercase bg-slate-800 p-3
 text-green-500"
              >
                {image.title}
              </p>

              <a
                href={image.demo}
                className="btn demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href={image.github}
                className="btn github"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

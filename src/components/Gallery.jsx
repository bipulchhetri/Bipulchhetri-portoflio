import React, { useState } from "react";
import "../index.css";
// import img1 from "../assets/portfolio/api.jpg"
// import img2 from "../assets/portfolio/apod.jpg"

const images = [
  {
    id: 10,
    url: "https://images.prismic.io/hatica/659f883f7a5e8b1120d56eae_TopAItoolstohelpyouwithcodereviewsin2024-2-.jpg?auto=format%2Ccompress&rect=0%2C0%2C1800%2C1151&w=1200&h=767",
    category: "Mern",
    title: "AI CODE REVIEWER",
    demo: "https://ai-code-review-rouge.vercel.app/",
    github: "https://github.com/bipulchhetri/AI-code-review",

  },
  {
    id: 0,
    url: "https://stackideas.com/images/apps/2429/logo.png",
    category: "Mern",
    title: "ENGLISIFY- BLOG APP",
    demo: "https://blog-app-beige-six.vercel.app/",
    github: "https://github.com/bipulchhetri/Blog-App",

  },
  {
    id: 1,
    url: "https://miro.medium.com/v2/resize:fit:1132/format:webp/1*DQAVyAM94Q88sk5Pq1iOJg.png",
    category: "Mern",
    title: "URL SHORTENER",
    demo: "https://shortify-phi.vercel.app/",
    github: "https://github.com/bipulchhetri/shortify",

  },
  {
    id: 2,
    url: "https://www.pdfgear.com/pdf-converter/img/how-to-convert-word-to-pdf-1.png",
    category: "Mern",
    title: "WORD TO PDF CONVERTER",
    demo: "https://word-to-pdf-iota.vercel.app/",
    github: "https://github.com/bipulchhetri/word-to-pdf",

  },
  {
    id: 3,
    url: "https://pocket-note-app-six.vercel.app/static/media/notes-main.981e2e07f14cd4175925.png",
    category: "React",
    title: "POECKET NOTE",
    demo: "https://pocket-note-app-six.vercel.app/",
    github: "https://github.com/bipulchhetri/Pocket-note-app",
  },
  {
    id: 4,
    url: "https://artificialintelligence-three.vercel.app/images/robot.png",
    category: "JavaScript",
    title: "Simple AI JS",
    demo: "https://artificialintelligence-three.vercel.app/",
    github: "https://github.com/bipulchhetri/AI",
  },

  {
    id: 5,
    url: "https://i.ytimg.com/vi/nPXn7pC2XZc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5XuyLO_ONRGmhgwYlp3CkVWnSww",
    category: "JavaScript",
    title: "TEXT TO SPEECH ",
    demo: "https://textstospeechconverter.netlify.app/",
    github: "https://github.com/bipulchhetri/10DaysJsprojectChallenge",
  },
  {
    id: 6,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0PVl3tWPW8jMk9hL18YrqDWKpQSwtA9Wog&s",
    category: "html",
    title: "Travel Website ",
    demo: "https://travel-dost.vercel.app/",
    github: "https://github.com/bipulchhetri/Hotel-Booking-Website",
  },
  // { id: 4, url: "https://via.placeholder.com/200", category: "React" },
  {
    id: 7,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDLMWSWyfLAmxHsjoPSVDU0XCoDmBr9Oy9Q&s",
    category: "html",
    title: "Organic Store",
    demo: "https://ecommercerontend.vercel.app/",
    github: "https://github.com/bipulchhetri/Frontend-Roadmap-Propeers",
  },
  // {
  //   id: 6,
  //   url: "https://via.placeholder.com/200",
  //   category: "JavaScript",
  //   title: "API Project",
  // },
  // { id: 7, url: "", category: "React" },

 
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
      <h1 className="port">My Latest Porject</h1>
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
 text-yellow-500"
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

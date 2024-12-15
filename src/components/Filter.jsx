// import React, { useEffect, useState } from "react";
// import { images, btns } from "../Data";


// const Filter = () => {
//   const [filterImages, setFilterImages] = useState(null);
//   const [active, setActive] = useState(false);
//   console.log(filterImages);

//   useEffect(() => {
//     setFilterImages(images);
//   }, []);

//   const handleClick = (e) => {
//     const btnValue = e.target.value;
//     setActive(btnValue);
//     const newFilterImages = images.filter((item) => item.category === btnValue);
//     if (btnValue === "all") {
//       setFilterImages(images);
//     } else {
//       setFilterImages(newFilterImages);
//     }
//   };

// //   return (
// //     <div className="wrapper mt-8">
// //       {/* heading */}
// //       <h4 className="text-5xl text-center font-bold m-2 mb-3 text-white border-b-4 border-pink-500 inline">
// //      Latest Project
// //       </h4>

// //       {/* button */}
//       // <div className="flex text-white justify-center gap-3 mb-5 pt-8 md:flex-row  flex-wrap">
//       //   {btns.map((item, id) => {
//       //     const { name, value } = item;
//       //     return (
//       //       <button
//       //         onClick={handleClick}
//       //         key={id}
//       //         value={value}
//       //         className={`${
//       //           active === value ? "bg-fourth" : ""
//       //         } bg-orange-500 rounded-t-full rounded-bl-full rounded-br-lg border-white p-4 shadow-lg`}
//       //       >
//       //         {name}
//       //       </button>
//       //     );
//       //   })}
//       // </div>

// //       {/* images */}
// //       <div className="grid md:grid-cols-3 gap-5">
// //         {filterImages &&
// //           filterImages.map((item, id) => {
// //             const { img } = item;
// //             return (
// //               <div
// //                 className="overflow-hidden border-4 border-solid border-green rounded-md group"
// //                 key={id}
// //               >
// //                 <img
// //                   className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 rounded-md"
// //                   src={img}
// //                   alt="demo-img"
// //                 />
// //               </div>
// //             );
// //           })}
// //       </div>
// //     </div>
// //   );
// // };
//  return (
//     <div className="wrapper mt-8">
//       {/* heading */}
//       <h4 className="text-5xl text-center font-bold m-2 mb-3 text-white border-b-4 border-pink-500 inline">
//      Latest Project
//       </h4>

//       {/* button */}
//       <div className="flex text-white justify-center gap-3 mb-5 pt-8 md:flex-row flex-wrap">
//         {btns.map((item, id) => {
//           const { name, value } = item;
//           return (
//             <button
//               onClick={handleClick}
//               key={id}
//               value={value}
//               className={`${
//                 active === value ? "bg-fourth" : ""
//               } bg-orange-500 rounded-t-full rounded-bl-full rounded-br-lg border-white p-4 shadow-lg`}
//             >
//               {name}
//             </button>
//           );
//         })}
//       </div>

//       {/* images */}
//       <div className="grid md:grid-cols-3 gap-5">
//         {filterImages &&
//           filterImages.map((item, id) => {
//             const { img } = item;
//             return (
//               <div
//                 className="overflow-hidden border-4 border-solid border-green rounded-md group"
//                 key={id}
//               >
//                 <img
//                   className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 rounded-md"
//                   src={img}
//                   alt="demo-img"
//                 />
//                   <div className="buttons">
//               <a href="#demo" className="btn demo">Demo</a>
//               <a href="#github" className="btn github">GitHub</a>
//             </div>
//               </div>
              
//             );
            
//           })}

//       </div>
//     </div>
//   );
// };
// export default Filter;

// // import React from "react";
// // import api from "../assets/portfolio/api.jpg";
// // import apod from "../assets/portfolio/apod.jpg";
// // import iptracker from "../assets/portfolio/iptracker.jpg";
// // import nftportal from "../assets/portfolio/nftportal.jpg";
// // import webpostman from "../assets/portfolio/webpostman.jpg";
// // import waveportal from "../assets/portfolio/waveportal.jpg";

// // const Portfolio = () => {
// //   const portfolios = [
// //     {
// //       id: 1,
// //       src: api,
// //       link: 'https://crypto-info-api.cyclic.app/',
// //       repo: 'https://github.com/rahulkarda/crypto-info-api'
// //     },
// //     {
// //       id: 2,
// //       src: webpostman,
// //       link: 'https://webpostman.netlify.app/',
// //       repo: 'https://github.com/rahulkarda/Web-Postman'
// //     },
// //     {
// //       id: 3,
// //       src: apod,
// //       link: 'https://apodbyrahul.netlify.app/',
// //       repo: 'https://github.com/rahulkarda/NASA-APOD'
// //     },
// //     {
// //       id: 4,
// //       src: waveportal,
// //       link: 'https://waveatrahul.netlify.app/',
// //       repo: 'https://github.com/rahulkarda/Wave-Portal'
// //     },
// //     {
// //       id: 5,
// //       src: nftportal,
// //       link: 'https://nftportalbyrahul.netlify.app/',
// //       repo: 'https://github.com/rahulkarda/NFT-Portal'
// //     },
// //     {
// //       id: 6,
// //       src: iptracker,
// //       link: 'https://trackmyip.netlify.app/',
// //       repo: 'https://github.com/rahulkarda/IP-Address-Tracker'
// //     },
// //   ];

// //   return (
    
// //     <div
// //       name="portfolio"
// //       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
// //     >
// //       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
// //         <div className="pb-8">
// //           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
// //             Portfolio
// //           </p>
// //           <p className="py-6">Check out some of my work right here</p>
// //         </div>

// //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
// //           {portfolios.map(({ id, src, link, repo }) => (
// //             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
// //               <img
// //                 src={src}
// //                 alt="projects"
// //                 className="rounded-md duration-200 hover:scale-105"
// //               />
// //               <div className="flex items-center justify-center">
// //                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
// //                   Demo
// //                 </button>
// //                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
// //                   GitHub
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Portfolio;



// new code with chatgpt 


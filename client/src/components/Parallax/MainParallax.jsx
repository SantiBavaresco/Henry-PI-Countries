// import React, { useEffect } from "react";

// const MainParallax = () => {
//   useEffect(() => {
//     const h1 = document.getElementById("h1");
//     const banner = document.getElementById("banner");
//     const button = document.getElementById("button");

//     const onScroll = (event) => {
//       const scrollPosition = event.target.scrollingElement.scrollTop;
//       if (scrollPosition > 150) {
//         banner.style.backgroundSize = "150%";
//         h1.style.opacity = 0;
//         h1.style.transform = "translate(0, -50px) scale(0.9)";
//         button.style.opacity = 0;
//         button.style.transform = "translate(0, -50px) scale(0.8)";
//       } else {
//         banner.style.backgroundSize = "180%";
//         h1.style.opacity = 1;
//         h1.style.transform = "none";
//         button.style.opacity = 1;
//         button.style.transform = "none";
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <h1 id="h1">Title</h1>
//       <div id="banner">
//         <img src="banner.jpg" alt="banner" />
//         <button id="button">Click Me</button>
//       </div>
//       <p>Some content</p>
//     </div>
//   );
// };

// export default MainParallax;
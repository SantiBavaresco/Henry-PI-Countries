// import React, { useRef, useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';

// export default function Mapita() {
//   const screenshotRef = useRef(null);
//   const [screenshotSrc, setScreenshotSrc] = useState(null);

//   useEffect(() => {
//     const elementToCapture = screenshotRef.current;
//     const canvas = document.createElement('canvas');
//     canvas.width = elementToCapture.offsetWidth;
//     canvas.height = elementToCapture.offsetHeight;
//     const context = canvas.getContext('2d');
//     context.drawImage(elementToCapture, 0, 0);
//     const dataUrl = canvas.toDataURL();
//     setScreenshotSrc(dataUrl);
//   }, []);

//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <img
//         ref={screenshotRef}
//         src="https://www.openstreetmap.org/relation/286393"
//         alt="Image"
//       />
//       {screenshotSrc && <img src={screenshotSrc} alt="Screenshot" />}
//     </div>
//   );
// }

// const rootElement = document.getElementById('root');

// ReactDOM.createRoot(rootElement).render(<Mapita/>);
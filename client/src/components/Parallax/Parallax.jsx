import React, { useRef, useEffect } from "react";
import styles from './Parallax.module.css';
import NavBar from "../NavBar/NavBar"



const SearchBar = () => {
  const parallaxRef = useRef();

  useEffect(() => {
    const parallax = parallaxRef.current;

    const onScroll = () => {
      parallax.style.transform = `translateY(-${window.scrollY * 0.5}px)`;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles["search-bar-container"]}>
        {/* <NavBar className={styles.search_bar_container} /> */}
      <div className={styles.parallax} ref={parallaxRef}>
        {/* <div className={styles["search-bar"]}>
          <input type="text" placeholder="Search" />
          <button>Go</button>
        </div> */}
            <h1>Welcome to the Countries Page</h1>
      </div>
    </div>
  );
};

export default SearchBar;


// import React from 'react';
// import styles from './Parallax.module.css';

// function Parallax() {
//   return (
//     <div>
//     <header id={styles.banner} className={styles.banner}>
//       <h1 id={styles.h1}>Parallax</h1>
//       <button id={styles.button}>Get Started</button>
//     </header>
//     <section className={styles.container}>
//       <h2>Lorem ipsum</h2>
//       <p>
//         Dolor sit amet consectetur adipisicing elit. Vero animi itaque labore
//         dolore dicta fugit perferendis beatae accusamus recusandae, sapiente
//         sunt explicabo. Mollitia, nobis consequuntur beatae ad doloribus quos
//         rem.
//       </p>
//       <p>
//         Dolor sit amet consectetur adipisicing elit. Vero animi itaque labore
//         dolore dicta fugit perferendis beatae accusamus recusandae, sapiente
//         sunt explicabo. Mollitia, nobis consequuntur beatae ad doloribus quos
//         rem.
//       </p>
//       <p>
//         Dolor sit amet consectetur adipisicing elit. Vero animi itaque labore
//         dolore dicta fugit perferendis beatae accusamus recusandae, sapiente
//         sunt explicabo. Mollitia, nobis consequuntur beatae ad doloribus quos
//         rem.
//       </p>
//       <h2>Lorem ipsum</h2>
//       <p>
//         Dolor sit amet consectetur adipisicing elit. Vero animi itaque labore
//         dolore dicta fugit perferendis beatae accusamus recusandae, sapiente
//         sunt explicabo. Mollitia, nobis consequuntur beatae ad doloribus quos
//         rem.
//       </p>
//       <p>
//         Dolor sit amet consectetur adipisicing elit. Vero animi itaque labore
//         dolore dicta fugit perferendis beatae accusamus recusandae, sapiente
//         sunt explicabo. Mollitia, nobis consequuntur beatae ad doloribus quos
//         rem.
//       </p>
//       <p>
//         Dolor sit amet consectetur adipisicing elit. Vero animi itaque labore
//         dolore dicta fugit perferendis beatae accusamus recusandae, sapiente
//         sunt explicabo. Mollitia, nobis consequuntur beatae ad doloribus quos
//         rem.
//       </p>
//     </section>
//     </div>
//   );
// }

// export default Parallax;

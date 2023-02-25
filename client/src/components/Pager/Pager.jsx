import React, { useEffect } from "react";
import styles from "./Pager.module.css"



export default function Pager({ countriesPerPage, countries, paginated }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
    pageNumber.push(i);
  }


  
  return (
    <nav>
      <ul>
        {pageNumber &&
          pageNumber.map((p) => (
            <ul key={p} className={styles.page_ul}>
              <button 
                className={styles.num_page}
                onClick={() => paginated(p)}>{p}
              </button>
            </ul>
          ))}
      </ul>
    </nav>
  );
}
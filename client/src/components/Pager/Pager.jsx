import React, { useEffect } from "react";
import styles from "./Pager.module.css"



export default function Pager({ countriesPerPage, countries, paginated, currentPage }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
    pageNumber.push(i);
  }
  // console.log("************current page: ", currentPage);
  // console.log("************array pagenumber: ", pageNumber);
  // console.log("********idice pagenumber: ", pageNumber[0]);


  // if(currentPage > pageNumber.length) currentPage = pageNumber[0];



  
  return (
    <nav>
      <ul>
        {pageNumber &&
          pageNumber.map((p) => (
            <ul key={p} className={styles.page_ul}>
              <button 
                key={p}
                className={currentPage === p ? styles.num_page_current : styles.num_page  }
                onClick={() => paginated(p)}>{p}
              </button>
            </ul>
          ))}
      </ul>
    </nav>
  );
}
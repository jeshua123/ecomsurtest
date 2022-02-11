import React from 'react';
import { useState } from 'react'

function PageButtom({ handleClick, pageNumber }) {
  let PageNumberArray = [...Array(pageNumber).keys()];
  const [pageFrom, setpageFrom] = useState(1)
  const [pageTo, setpageTo] = useState(6)



  const handleClickNextPages = () => {

    if (pageTo < 55) {
      setpageFrom(pageFrom + 5);
      setpageTo(pageTo + 5)
    }

  }
  const handleClickPreviousPages = () => {
    if (pageFrom > 1) {
      setpageFrom(pageFrom - 5)
      setpageTo(pageTo - 5)
    }

  }
  let pagesshowed = PageNumberArray.slice(pageFrom, pageTo)


  return <>
    <div class="div-page-box">
      <div class="center">
        <ul class="pagination">
          <li onClick={handleClickPreviousPages}><a href="#">«</a></li>


          {pagesshowed.map((page) => {


            if (page > 0) { return (<li onClick={() => handleClick(page)}><a href="#" class={`${null}`} >{page}</a></li>) }
          }
          )

          }
          <li onClick={handleClickNextPages} ><a href="#">»</a></li>
        </ul>
      </div>

    </div>
  </>;
}

export default PageButtom;

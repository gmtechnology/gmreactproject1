import React from 'react';

function Card(props){
    return( 
      <>
  <div className="cards">
    <div className="card">
      <img src={props.imgsrc} alt="myPic" className="card__img" />
      <div className="card__info">
        <span className="card__category"></span>
        <h3 className="card__title"></h3>
        <a href="" target="_blank">
          <button>Like</button>
          <button>Forward</button>
        </a>
      </div>
    </div>
  </div>
  </> 
  
    )
  }
  
  export default Card;

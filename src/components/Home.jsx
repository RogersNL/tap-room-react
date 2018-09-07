import React from 'react';
import taproomImage from '../assets/images/taproom.jpg';

function Home(){
  return(
    <div>
      <img src={taproomImage}/>
      <style jsx>{`
        img {
          margin-top: 100px;
          width: 100%;
          text-align: center;
          border: 3px solid black;
          border-radius: 70%;
        }
      `}</style>
    </div>
  );
}


export default Home;

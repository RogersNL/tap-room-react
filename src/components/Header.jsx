import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <h1>Welcome to Tap Room!</h1>
      <div className="links"><Link to="/">Home</Link> | <Link to="/newkeg">Add a Keg</Link> | <Link to="/kegs">List of Kegs</Link> | <Link to="/editkeg">Edit a Keg</Link></div>
      <style jsx>{`
        h1 {
          text-align: center;
        }
        .links {
          text-align: center;
        }
      `}</style>
    </div>
  );
}


export default Header;

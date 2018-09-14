import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  function handlePassingIdForSellPint(){
    props.onSellingPints(props.id);
  }
  return(
    <tr className="bg-success">
      <td>{props.name}</td>
      <td>{props.brand}</td>
      <td>{props.price}</td>
      <td>{props.alcoholContent}</td>
      <td>{props.pintsLeft}</td>
      <td><button className="btn btn-primary" onClick={handlePassingIdForSellPint}>Sold!</button></td>
      <td><button className="btn btn-warning">Edit!</button></td>
      <style jsx>{`
        td, th{
          width: 150px;
          text-align: center;
        }
      `}</style>
    </tr>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  onSellingPints: PropTypes.func
};

export default Keg;

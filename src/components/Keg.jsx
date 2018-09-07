import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(

  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired),
  pintsLeft: PropTypes.number.isRequired,
};

export default Keg;

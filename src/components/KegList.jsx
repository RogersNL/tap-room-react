import React from 'react';
import Filter from './Filter';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return(
    <div>
      <h3>Kegs</h3>
      <Filter/>
      <table>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Alcohol Content (%)</th>
          <th>Pints Left</th>
        </tr>
        {props.kegList.map((keg) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pintsLeft={keg.pintsLeft}
            id={keg.id}
            key={keg.id}/>
        )}
      </table>
      <style jsx>{`
        h3 {
          text-align: center;
        }
        td, th{
          width: 150px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;

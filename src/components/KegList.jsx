import React from 'react';
import Filter from './Filter';
import Keg from './Keg';
import PropTypes from 'prop-types';

// const masterKegList =
//   [
//     {
//       name: 'Spicy Orange Dream',
//       brand: 'Bud Night',
//       price: 11,
//       alcoholContent: 2,
//       pintsLeft: 98
//     },
//     {
//       name: 'Caramel Banana Surprise',
//       brand: 'Willer Lite',
//       price: 5,
//       alcoholContent: 2,
//       pintsLeft: 23
//     },
//     {
//       name: 'Monster Grapefruit',
//       brand: 'Tres Equis',
//       price: 33,
//       alcoholContent: 2,
//       pintsLeft: 111
//     },
//     {
//       name: 'Graveyard Sunshine',
//       brand: 'Doors Lite',
//       price: 4,
//       alcoholContent: 2,
//       pintsLeft: 24
//     },
//     {
//       name: 'Organic Seaweed',
//       brand: 'Green Moon',
//       price: 3,
//       alcoholContent: 2,
//       pintsLeft: 46
//     },
//     {
//       name: 'Crazy Frog',
//       brand: 'Sudweiser',
//       price: 1,
//       alcoholContent: 2,
//       pintsLeft: 50
//     }
//   ]

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

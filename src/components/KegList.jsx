import React from 'react';
import Filter from './Filter';

const masterKegList =
  [
    {
      name: 'Spicy Orange Dream',
      brand: 'Bud Night',
      price: 11,
      alcoholContent: 2,
      pintsLeft: 98
    },
    {
      name: 'Caramel Banana Surprise',
      brand: 'Willer Light',
      price: 5,
      alcoholContent: 2,
      pintsLeft: 23
    },
    {
      name: 'Monster Grapefruit',
      brand: 'Tres Equis',
      price: 33,
      alcoholContent: 2,
      pintsLeft: 111
    },
    {
      name: 'Graveyard Sunshine',
      brand: 'Doors Lite',
      price: 4,
      alcoholContent: 2,
      pintsLeft: 24
    },
    {
      name: 'Organic Seaweed',
      brand: 'Green Moon',
      price: 3,
      alcoholContent: 2,
      pintsLeft: 46
    },
    {
      name: 'Crazy Frog',
      brand: 'Sudweiser',
      price: 1,
      alcoholContent: 2,
      pintsLeft: 50
    }
  ]

function KegList(){
  return(
    <div>
      <h3>Kegs</h3>
      <Filter/>
      <style jsx>{`
        h3 {
          text-align: center;
        }
      `}</style>
    </div>
  );
}


export default KegList;

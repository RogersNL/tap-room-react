import React from 'react';

function Filter(){
  return(
    <select>
      <option value="allKeg" selected>All Beer</option>
      <option value="lowPints">Less than 10 remaining</option>
      <option value="lowPrice">Low Price</option>
    </select>
  );
}


export default Filter;

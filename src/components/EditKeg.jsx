import React from 'react';
import KegList from './KegList';

function EditKeg(){
  return(
    <div>
      <KegList/>
      <form>
        <label for="keg">Keg Name</label>
        <input className="form-control"/>
        <label for="brand">Keg Brand</label>
        <input className="form-control"/>
        <label for="price">Keg Price</label>
        <input className="form-control"/>
        <label for="content">Alcohol Content</label>
        <input className="form-control"/>
        <label for="pints">Pints Left</label>
        <input className="form-control"/>
        <button type="button" className="btn btn-warning">Done</button>
      </form>
    </div>

  );
}


export default EditKeg;

import React from 'react';
import PropTypes from 'prop-types';

function KegForm(){
  return(
    <div>
      <h3>Add a new Keg</h3>
      <form onSubmit={}>
        <label>Keg Name</label>
        <input className="form-control"/>
        <label>Keg Brand</label>
        <input className="form-control"/>
        <label>Keg Price</label>
        <input className="form-control"/>
        <label>Alcohol Content</label>
        <input className="form-control"/>
        <label>Pints Left</label>
        <input className="form-control"/>
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}
this.propTypes = {

}

export default KegForm;

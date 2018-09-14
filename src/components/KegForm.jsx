import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function KegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _pintsLeft = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, pintsLeft: _pintsLeft.value, id: v4()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _pintsLeft.value = '';
  }
  return(
    <div>
      <h3>Add a new Keg</h3>
      <form onSubmit={handleNewKegFormSubmission}>
        <label>Keg Name</label>
        <input className="form-control"
          type='text'
          id='name'
          placeholder='Keg Name'
          ref={(input) => {_name = input;}}/>
        <label>Keg Brand</label>
        <input className="form-control"
          type='text'
          id='brand'
          placeholder='Keg Brand'
          ref={(input) => {_brand = input;}}/>
        <label>Keg Price</label>
        <input className="form-control"
          type='number'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <label>Alcohol Content</label>
        <input className="form-control"
          type='number'
          id='alcoholContent'
          placeholder='Alcohol Content (%)'
          ref={(input) => {_alcoholContent = input;}}/>
        <label>Pints Left</label>
        <input className="form-control"
          type='number'
          id='pintsLeft'
          placeholder='Pints Left'
          ref={(input) => {_pintsLeft = input;}}/>
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}
KegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default KegForm;

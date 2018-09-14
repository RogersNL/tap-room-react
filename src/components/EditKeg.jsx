import React from 'react';
import PropTypes from 'prop-types';

function EditKeg(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _pintsLeft = null;
  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onUpdatingKegs({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, pintsLeft: _pintsLeft.value, id: props.id})
  }
  return(
    <div>
      <form>
        <label for="keg">Keg Name</label>
        <input className="form-control"
          type='text'
          id='name'
          value={props.selectedKeg.name}
          ref={(input) => {_name = input;}}/>
        <label for="brand">Keg Brand</label>
        <input className="form-control"
          type='text'
          id='brand'
          value={props.selectedKeg.brand}
          ref={(input) => {_brand = input;}}/>
        <label for="price">Keg Price</label>
        <input className="form-control"
          type='number'
          id='price'
          value={props.selectedKeg.price}
          ref={(input) => {_price = input;}}/>
        <label for="content">Alcohol Content</label>
        <input className="form-control"
          type='number'
          id='alcoholContent'
          value={props.selectedKeg.alcoholContent}
          ref={(input) => {_alcoholContent = input;}}/>
        <label for="pints">Pints Left</label>
        <input className="form-control"
          type='number'
          id='pintsLeft'
          value={props.selectedKeg.pintsLeft}
          ref={(input) => {_pintsLeft = input;}}/>
        <button type="submit" className="btn btn-warning">Done</button>
      </form>
    </div>

  );
}

EditKeg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pintsLeft: PropTypes.number,
  onUpdatingKegs: PropTypes.func
};

export default EditKeg;

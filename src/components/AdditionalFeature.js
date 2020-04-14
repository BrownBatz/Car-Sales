import React from 'react';

import { addItem } from "../actions";

import { connect } from "react-redux";

const AdditionalFeature = props => {
  console.log("Props on additional features", props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {
        props.addItem(props.feature);
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapPropsToState = state => {
  return {
    addedItemsOnProps: state.addedItemsReducer.addedItems
  }
}

export default connect(mapPropsToState, {addItem})(AdditionalFeature);

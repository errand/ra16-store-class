import React from 'react';
import PropTypes from 'prop-types';
import ItemModel from "../models/ItemModel";

export default class ShopItemClass extends React.Component {

  static propTypes = {
    item: PropTypes.instanceOf(ItemModel).isRequired  //not working
    //item: PropTypes.object.isRequired // Working
  }

  render () {
    const {item} = this.props;
    console.log(this.props)
    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">
          {item.descriptionFull}
        </div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{item.currency}{item.price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }
}

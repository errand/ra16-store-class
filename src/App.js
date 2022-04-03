import ShopItemClass from './components/ShopItemClass'

import ItemModel from "./models/ItemModel";
import './App.css';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  const itemClass = new ItemModel(item.brand, item.title, item.description, item.descriptionFull, item.price, item.currency)

// Внутри компонента App
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={itemClass} />
      </div>
    </div>
  )
}

export default App;

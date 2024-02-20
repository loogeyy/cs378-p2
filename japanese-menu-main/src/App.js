import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import OrderAlert from './components/OrderAlert';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.

const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

function App() {
  const [itemCounts, setItemCounts] = useState({
    'Gyoza': 0,
    'Sushi': 0,
    'Ramen': 0,
    'Matcha Cake': 0,
    'Mochi': 0,
    'Yakitori': 0,
    'Takoyaki': 0,
    'Sashimi': 0,
    'Okonomiyaki': 0,
    'Katsu Curry': 0,
  });
  const [showAlert, setShowAlert] = useState(false);
  const handleClose = () => setShowAlert(false);
  const handleShow = () => setShowAlert(true);

  const [subtotal, setSubtotal] = useState(0);

  const updateValue = (key, count) => {
    if (itemCounts[key] + count >= 0) {
      setItemCounts(prevCounts => ({
        ...prevCounts,
        [key]: prevCounts[key] + count
      }));

      const menuItem = menuItems.find(item => item.title === key);
      const change = count * menuItem.price;
      setSubtotal(prevSubtotal => parseFloat((prevSubtotal + change).toFixed(2)));
      console.log(itemCounts);
    }
  };

  const clearValues = () => {
    setItemCounts({
      'Gyoza': 0,
      'Sushi': 0,
      'Ramen': 0,
      'Matcha Cake': 0,
      'Mochi': 0,
      'Yakitori': 0,
      'Takoyaki': 0,
      'Sashimi': 0,
      'Okonomiyaki': 0,
      'Katsu Curry': 0,
    });
    setSubtotal(0);
  };



  return (
    <div class="container-fluid">
      <MenuHeader></MenuHeader>
      <div class="menu">
        {menuItems.map((menuItem) => (
          <MenuItem title={menuItem.title} description={menuItem.description} imageName={menuItem.imageName} price={menuItem.price} count={itemCounts[menuItem.title]} updateValue={updateValue} />
        ))}
      </div>
      <div class="row">
        <p class="col-5 "><b>Subtotal:</b> ${subtotal}</p>
        <div class="col">
          <button class="clear-button"
            onClick={clearValues}>Clear All</button>
        </div>
        <div class="col">
          <button class="order-button"
            onClick={handleShow}>Order</button>
        </div>
        
        <OrderAlert
          show={showAlert}
          handleClose={handleClose}
          itemCounts={itemCounts}
          subtotal={subtotal}
        ></OrderAlert>

      </div>
    </div>
  );
}

export default App;

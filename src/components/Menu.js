import React, { useState } from 'react';
import MenuButtons from './MenuButtons';
import MenuItems from './MenuItems';
import items from '../data/data';

// use set data structure to get unique values
const allCategories = ['all',...new Set(items.map((item) =>
 item.category))];


const Menu = () => {
  // menus items
  const [menuItems, setMenuItems] = useState(items);
  // dynamically set menus buttons
  const [categories, setCategories] = useState(allCategories);

  // function looks for category string
  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }

    // iterate over items data
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section>
        <h3 class="title">Menu</h3>

        {
          console.log(categories)
        }

        <MenuButtons categories={categories} filterItems={filterItems} />
        <MenuItems items={menuItems} />
      </section>
    </main>
  );
}

export default Menu;
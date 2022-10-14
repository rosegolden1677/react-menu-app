import React from 'react';

const MenuButtons = ({categories, filterItems}) => {
  return (
    <div className='menu-btns'>
      <button className='filter-btn' onClick={() => 
        filterItems('all')}>
          all
      </button>
      <button className='filter-btn' onClick={() => 
        filterItems('breakfast')}>
          entrees
      </button> 
      <button className='filter-btn' onClick={() => 
        filterItems('sides')}>
          sides
      </button> 
      <button className='filter-btn' onClick={() => 
        filterItems('beverages')}>
          beverages
      </button> 
    </div>
  );
}

export default MenuButtons;
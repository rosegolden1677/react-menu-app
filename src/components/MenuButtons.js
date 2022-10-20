import React from 'react';

const MenuButtons = ({categories, filterItems}) => {

  return (
    <article className='menu-btns'>
      <button onClick={() => 
        filterItems('all')}>
          all
      </button>
      <button onClick={() => 
        filterItems('breakfast')}>
          entrees
      </button> 
      <button onClick={() => 
        filterItems('sides')}>
          sides
      </button> 
      <button onClick={() => 
        filterItems('beverages')}>
          beverages
      </button> 

      {/* {
        categories.map((category, index) => {

          return (
            <button key={index} onClick={() => filterItems({category})}>
              {categories.filter(unique)}
              {console.log(category)}
            </button>
          )
        })
      } */}
    </article>
  );
}

export default MenuButtons;
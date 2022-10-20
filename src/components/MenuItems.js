import React from 'react';

const MenuItems = ({items}) => {

  return (
    <article className='menu-items'>

      {
        // iterate over array of objects
        items.map((menuItem) => {

          const {id, name, price, desc} = menuItem;

          return (
            <article key={id} className="item">
              <div class="left">
                <h5>{name}</h5>
                <p>{desc}</p>
              </div>
              <div class="right">
                <p>${price}</p>
              </div>
            </article>
          )
        })
      }
    </article>
  );
}

export default MenuItems;
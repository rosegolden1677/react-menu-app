import React from 'react';

const MenuItems = ({items}) => {

  return (
    <section className='menu-items'>

      {
        // iterate over array of objects
        items.map((menuItem) => {

          const {id, name, price, desc} = menuItem;

          return (
            <article key={id}>
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
    </section>
  );
}

export default MenuItems;
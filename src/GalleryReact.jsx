import React, { useState } from 'react'
import Menu from '../src/Menu'
import Category from './Category';
import MenuItems from './MenuItems';

const allCatValues = [...new Set(Menu.map((currElem) => currElem.category)), "All"];

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);

    const [catItems, setCatItems] = useState(allCatValues)

    const filterItem = (categItem) => {

        if (categItem === "All") {
            setItems(Menu)
            return;
        }

        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />

            {/* Category items section */}

            <Category filterItem={filterItem} catItems={catItems} />

            {/* my main items section  */}

            <MenuItems items={items} />
        </>
    )
}

export default GalleryReact;
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react'
import Item from './Item'

function Items({items,setItems}) {
    

    function handleToggle  (id)  {
        let updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, checked: !item.checked }
            }
            return item;
        })
        setItems(updatedItems);
    }

    return (
        <main>
            <h1>Content</h1><div>
                <input type="text" placeholder='Add new item' />
                <button>Add</button>
            </div>
            <ul>
                {
                    items.map((item) => <Item key={item.id} item={item} onToggle={handleToggle} />)
                }
            </ul>
            {/* <ShoppingList/> */}
        </main>
    )
}

export default Items
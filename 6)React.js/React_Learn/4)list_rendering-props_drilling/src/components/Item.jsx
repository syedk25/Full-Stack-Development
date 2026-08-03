import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

function Item({ item, onToggle }) {
    return (
        <li key={item.id} className='item'>
            <input type="checkbox" checked={item.checked} onChange={() => onToggle(item.id)} />
            <label>{item.label}</label>
            <FaTrashAlt role='button' tabIndex={0} />
        </li>
    )
}

export default Item
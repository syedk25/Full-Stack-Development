import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa"; import { FaEdit } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";import { IoIosAddCircle } from "react-icons/io";

function Content() {

  let [newItem, setNewItem] = useState('');
  let [currentElementId, setCurrentElementId] = useState(null);
  let [items, setItems] = useState(
    [
      { id: 1, label: 'HTML && CSS', checked: true },
      { id: 2, label: 'JavaScript', checked: true },
      { id: 3, label: 'React', checked: false },
    ]
  )
  let [isEditing, setIsEditing] = useState(false);

  function handleCheck(id) {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked }
      }
      return item;
    })
    setItems(updatedItems);
  }
  let handleUpdate = (id) => {
    setCurrentElementId(id);//store the id of the element we want to edit
    const itemToEdit = items.find(item => item.id === id);
    setNewItem(itemToEdit.label);//set the input value to the label of the element we want to edit  
    setIsEditing(true);
  }
  let handleDelete = (id) => {
    const newItems = items
      .filter(item => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 }
      });
    setItems(newItems);
  }
  let handleAddOrSaveItem = () => {

    if (isEditing) {
      setIsEditing(false);
      const updatedItems = items.map(item => {
        if (item.id === currentElementId) {
          return { ...item, label: newItem }
        }
        return item;
      });
      setItems(updatedItems);
      setCurrentElementId(null);
      setNewItem('');
      setIsEditing(false);
    } else {
      setItems([...items, { id: items.length + 1, label: newItem, checked: false }]);
      setNewItem('');
    }
  }


  return (
    <main>
      <div>
        <input type="text" placeholder='Add New Course' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button onClick={handleAddOrSaveItem}>{isEditing ? <CiSaveDown2 color='green'/> : <IoIosAddCircle color='blue' />}</button>
      </div>
      <ul>
        {

          items.map((item) => {
            return (
              <li key={item.id} className='item'>
                <input type="checkbox" checked={item.checked} onChange={() => { handleCheck(item.id) }} />
                <label>{item.label}</label>
                <FaEdit id='edit' role='button' tabIndex={0} onClick={() => handleUpdate(item.id)} />
                <FaTrashAlt id='delete' role='button' tabIndex={0} onClick={() => handleDelete(item.id)} />
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}

export default Content
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa"; import { FaEdit } from "react-icons/fa";


function Content() {

  let [items, setItems] = useState(
    [
      { id: 1, label: 'HTML && CSS', checked: true },
      { id: 2, label: 'JavaScript', checked: false },
      { id: 3, label: 'React', checked: true },
    ]
  )
  let [isEditing, setIsEditing] = useState(false);
  let [editingId, setEditingId] = useState(null);

  function handleCheck(id) {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked }
      }
      return item;
    })
    setItems(updatedItems);
  }

  let handleAdd = () => { 
    if (newItem.trim() !== '') { 
      setItems([...items, { id: items.length+1, label: newItem, checked: false }]);
      setNewItem('');
    }else{alert('the input is empty.');}
  }

  let handleUpdate = (id) => {
    setIsEditing(true); 
    setNewItem(items.find(item => item.id === id).label);
    setEditingId(id);
  }

  let handleSave = (id) => {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, label: newItem }
      }
      return item;
    })
    setItems(updatedItems);
    setNewItem('');
    setIsEditing(false);
  }

  let handleDelete = (id) => {
    const newItems = items
      .filter(item => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 }
      });
    setItems(newItems);
  }


  let [newItem, setNewItem] = useState('');

  return (
    <main>
      <h1>Content</h1>
      <div>
        <input type="text" placeholder='Add New Course' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button onClick={() => isEditing ? handleSave(editingId) : handleAdd()}> {isEditing ? 'Save' : 'Add'} </button>
      </div>
      <ul>
        {

          items.map((item) => {
            return (
              <li key={item.id} className='item'>
                <input type="checkbox" checked={item.checked} onChange={() => { handleCheck(item.id) }} />
                <h3 style={{display:'inline'}}>  {item.id}) </h3>
                <label>{item.label}</label>
                <FaEdit id="update" role='button' tabIndex={0} onClick={() => handleUpdate(item.id)} />
                <FaTrashAlt id="delete" role='button' tabIndex={0} onClick={() => handleDelete(item.id)} />
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}

export default Content
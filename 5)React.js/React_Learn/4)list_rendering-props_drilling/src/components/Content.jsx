import Items from "./Items"
import React, { useState } from 'react'

function Content() {
  let [items, setItems] = useState(
        [
            { id: 1, label: 'HTML && CSS', checked: true },
            { id: 2, label: 'JavaScript', checked: true },
            { id: 3, label: 'React', checked: false },
        ]
    )
  return <Items items={items} setItems={setItems} />
}

export default Content
import React, { useState } from 'react'
import AddItem from '../AddItem';
import ItemList from '../ItemList';

export default function Items() {
    const [items, setItems] = useState([]);
  

    const submit = event => {
        event.preventDefault();
        const item = event.target.item.value;
        const price = event.target.price.value;
        const counter = 0;
        const product = {item, counter, price}
        setItems([...items, product])
        event.target.reset();
    }

    function remove(delItem) {
        const newItem = items.filter(product => product !== delItem)
        setItems(newItem);
    }

    function incrItem(plusCount) {
      const target = items.find(item => item.counter !== plusCount);
      target.counter +=1;
      setItems([ ...items]);
    }

    function decrItem(minusCount) {
        const target = items.find(item => item.counter !== minusCount);
        if(target.counter > 0) {
        target.counter -=1;
        setItems([ ...items]);
        }
      
    }

  return (
    <div>
        <AddItem submit={submit}/>
    
        <ItemList items={items} remove={remove} incrItem={incrItem} decrItem={decrItem} />
    </div>
  )
}

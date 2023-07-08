import React from 'react'
import Item from '../Item'

export default function ItemList({items, remove, incrItem, decrItem}) {
  return (
    <div>
        { 
           items.map(item => <Item key={item} item={item} remove={remove} incrItem={incrItem} decrItem={decrItem}/>)
        }
    </div>
  )
}

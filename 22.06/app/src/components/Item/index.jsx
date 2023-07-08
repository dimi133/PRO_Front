import React from 'react';
import s from "./style.module.css"

export default function Item({item, remove, incrItem, decrItem}) {
  return (
    <>
    <div className={s.item}>
        <p>{item.item}</p>
        <div className={s.count}>
          <button onClick={decrItem} className={s.btnCount} >-</button>
          <p>{item.counter}</p>
          <button onClick={incrItem} className={s.btnCount} >+</button>
          <p>{item.price}</p>
        </div>
        
    </div>
        <button onClick={() => remove(item)} className={s.btn}>X</button>
    </>
  )
}

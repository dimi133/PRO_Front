import React from 'react';
import s from "./style.module.css";

export default function AddItem({submit}) {
  return (
    <form onSubmit={submit} className={s.item}>
            <input type="text" name='item' placeholder='Название' className={s.input} />
            <input type="number" name='price' placeholder='Цена' className={s.input} />
            <button className={s.btn}>Добавить</button>
        </form>
  )
}

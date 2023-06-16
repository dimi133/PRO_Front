// 1.  реализовать приложение на React, которое выводит компоненты с данными из массива объектов. Массив содержит данные о товаре (id, название, цена).

import React from 'react'

export default function products({id, name, price}) {
  return (
    <div>
        <p>{id}</p>
        <p>{name} = {price} Eur</p>
    </div>
  )
}

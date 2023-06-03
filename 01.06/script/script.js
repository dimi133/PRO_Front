// 1 уровень сложности: написать скрипт, который отправляет запрос по адресу https://fakestoreapi.com/products и отображает карточки с продуктами. На каждой карточке должны быть указаны наименование и цена товара.


function getProduct(){
    fetch('https://fakestoreapi.com/products')
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            const product = data;
        
    const root = document.querySelector('#root');
    product.forEach(product => {
        const card = document.createElement('div');
            card.classList.add('product_card');
        const name = document.createElement('p');
            name.innerText = product.title;
            name.classList.add('product_name');
        const money = document.createElement('p');
            money.innerText = 'Price ' + product.price;
            money.classList.add('product_price');
        card.append(name);
        card.append(money);
        root.append(card);
    }) });
}

getProduct();


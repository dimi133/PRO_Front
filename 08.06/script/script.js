
const root = document.querySelector('#root');

function render ({strDrinkThumb, idDrink, strInstructions}){
    const img = document.createElement('img');
        img.src = strDrinkThumb;
    const h3 = document.createElement('h3');
        h3.innerText = idDrink;
    const p = document.createElement('p');
        p.innerText = strInstructions;
    const conteiner = document.createElement('div');
    conteiner.append(img, h3, p);
    root.append(conteiner);
}

const getDrink = async () => {
    const resp  = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    const data = await resp.json();
    const drinks = data.drinks;
    drinks.forEach((drinks) => {
        
    console.log(drinks);
    render(drinks);
})}


getDrink();
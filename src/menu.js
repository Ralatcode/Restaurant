const menuH1 = document.createElement('h1');
const menuImg = document.createElement('img');
const menuPara = document.createElement('p');
const menuContent = document.createElement('div');
const heroContent = document.createElement('div');
const divAppetizer = document.createElement('div');
const divSoup = document.createElement('div');

const appetizersObj = {
    div: divAppetizer,
    heading: 'Appetizers',
    item1: 'Peppered Snails (NGN 3,500): Spicy marinated snails, grilled to perfection.',
    item2: 'Meat Pie (NGN 800): Flaky pastry stuffed with minced meat, potatoes, and spices',
    item3: 'Moi Moi (NGN 1,200): Steamed bean pudding with a hint of peppers and spices.',
    item4: 'Asun (NGN 3,000): Spicy grilled goat meat, seasoned with traditional spices.',
};

const soupObj = {
    div: divSoup,
    heading: 'Soup',
    item1: 'Egusi Soup (NGN 3,000): Ground melon seeds cooked with spinach and palm oil. Served with your choice of swallow.',
    item2: 'Afang Soup (NGN 3,500): Rich vegetable soup with waterleaf and okazi leaves. Served with your choice of swallow.',
    item3: 'Efo Riro (NGN 3,200): A savory spinach stew with assorted meats and spices.',
    item4: 'Banga Soup (NGN 3,800): Palm nut soup with fresh catfish. Served with your choice of swallow.',
};

menuImg.src = 'https://metrobi.com/wp-content/uploads/2024/06/10-restaurant-menu-ideas-to-attract-more-customers-768x434.webp';
menuImg.alt = 'Menu Image';
menuImg.classList.add('home-img');
menuPara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nulla dolorum eveniet atque ab cum!';
menuH1.textContent = "Check Out Our Menu";
heroContent.classList.add('home-div');
heroContent.append(menuImg, menuH1, menuPara);

function createInnerContent(parentObj) {
    const heading = document.createElement('h2');
    heading.classList.add('heading');
    heading.textContent = parentObj.heading;
    const ul = document.createElement('ul')
    for (let i = 1; i <= 4; i++) {
        const item = document.createElement('li');
        item.classList.add(`item${i}`);
        if (item.classList.value === 'item1') {
            item.textContent = parentObj.item1;
        } else if (item.classList.value === 'item2') {
            item.textContent = parentObj.item2;
        } else if (item.classList.value === 'item2') {
            item.textContent = parentObj.item2;
        } else if (item.classList.value === 'item3') {
            item.textContent = parentObj.item3;
        } else if (item.classList.value === 'item4') {
            item.textContent = parentObj.item4;
        }

        ul.append(item);
    }
    parentObj.div.append(heading, ul);
}


createInnerContent(appetizersObj);
createInnerContent(soupObj);


menuContent.append(heroContent, divAppetizer,divSoup);



export {menuContent};
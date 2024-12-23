const menuH1 = document.createElement('h1');
const menuImg = document.createElement('img');
const menuPara = document.createElement('p');
const divAppetizer = document.createElement('div');
const divSoup = document.createElement('div');

menuImg.src = 'https://metrobi.com/wp-content/uploads/2024/06/10-restaurant-menu-ideas-to-attract-more-customers-768x434.webp';
menuImg.alt = 'Menu Image';
menuImg.classList.add('home-img');
menuPara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nulla dolorum eveniet atque ab cum!';
menuH1.textContent = "Check Out Our Menu";

function createInnerContent(parentDiv) {
    const heading = document.createElement('h2');
    heading.classList.add('heading');
    
}


export {menuImg, menuH1, menuPara};
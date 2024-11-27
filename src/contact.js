const contactH1 = document.createElement('h1');
const contactImg = document.createElement('img');
const contactPara = document.createElement('p');

contactImg.src = 'https://www.touchpoint.com/wp-content/uploads/2023/10/Featured-image-4.png';
contactImg.alt = 'contact';
contactImg.classList.add('home-img');
contactPara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nulla dolorum eveniet atque ab cum!';
contactH1.textContent = "Contact Us for more Information";

export {contactImg, contactH1, contactPara};
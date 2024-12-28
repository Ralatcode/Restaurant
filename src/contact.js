const contactH1 = document.createElement('h1');
const contactImg = document.createElement('img');
const contactPara = document.createElement('p');
const heroDiv = document.createElement('div');
const contactContent = document.createElement('div');

contactImg.src = 'https://www.touchpoint.com/wp-content/uploads/2023/10/Featured-image-4.png';
contactImg.alt = 'contact';
contactImg.classList.add('home-img');
contactPara.textContent = ' Join us and savor the essence of Nigeria.';
contactH1.textContent = "Ralat Restaurant";
heroDiv.append(contactImg, contactH1, contactPara);

contactContent.append(heroDiv);

export{contactContent};
